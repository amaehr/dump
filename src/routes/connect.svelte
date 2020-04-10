<script>
  import { onMount } from "svelte";
  import { Janus } from "janus-gateway";

  // Client variables
  let mixer = null;
  let muted = false;
  let room_number = Math.floor(Math.random() * (999999 - 2000)) + 2000;

  function create_room() {
    let content = { request: "create", room: room_number };
    mixer.send({ message: content });
  }

  async function join_room() {
    let content = { request: "join", room: room_number };
    await mixer.send({ message: content });
  }

  async function join_public() {
    let content = { request: "join", room: 1234 };
    await mixer.send({ message: content });
  }

  function number_of_participants(room) {
    let content = { request: "listparticipants", room: room };
    mixer.send({ message: content });
  }

  async function mute() {
    muted = !muted;
    let mute = { request: "configure", muted: muted };
    await mixer.send({ message: mute });
  }

  function publish_stream() {
    mixer.createOffer({
      media: { video: false }, // This is an audio only room
      success: function(jsep) {
        Janus.debug("Got SDP!");
        Janus.debug(jsep);
        var publish = { request: "configure", muted: false };
        mixertest.send({ message: publish, jsep: jsep });
      },
      error: function(error) {
        Janus.error("WebRTC error:", error);
      }
    });
  }

  onMount(() => {
    Janus.init({
      // TODO remove
      debug: true,
      dependencies: Janus.useDefaultDependencies()
    });
    let janus = new Janus({
      server: [
        "wss://" + window.location.hostname + ":2096",
        "ws://" + window.location.hostname + ":2095",
        "https://" + window.location.hostname + ":8443/janus",
        "http://" + window.location.hostname + ":8080/janus"
      ],
      iceServers: [
        "stun.solnet.ch:3478",
        "stun.l.google.com:19302",
        "stun1.l.google.com:19302",
        "stun2.l.google.com:19302",
        "stun3.l.google.com:19302",
        "stun4.l.google.com:19302"
      ],
      success: function() {
        // Done! attach to plugin XYZ
        janus.attach({
          plugin: "janus.plugin.audiobridge",
          success: function(pluginHandle) {
            // Plugin attached! 'pluginHandle' is our handle
            mixer = pluginHandle;
          },
          error: function(cause) {
            // Couldn't attach to the plugin
            Janus.error("  -- Error attaching plugin...", cause);
          },
          consentDialog: function(on) {
            // e.g., Darken the screen if on=true (getUserMedia incoming), restore it otherwise
            Janus.debug(
              "Consent dialog should be " + (on ? "on" : "off") + " now"
            );
            if (on) {
              Janus.error("Consent missing?");
            }
          },
          onmessage: function(msg, jsep) {
            // We got a message/event (msg) from the plugin
            // If jsep is not null, this involves a WebRTC negotiation
            Janus.debug(" ::: Got a message :::");
            Janus.debug(msg);
            var event = msg["audiobridge"];
            Janus.debug("Event: " + event);
            if (event === "joined" || event === "created") {
              room_number = msg["room"];
              console.log(room_number);
            }
          },
          onlocalstream: function(stream) {
            // We have a local stream (getUserMedia worked!) to display
          },
          onremotestream: function(stream) {
            // We have a remote stream (working PeerConnection!) to display
          },
          oncleanup: function() {
            // PeerConnection with the plugin closed, clean the UI
            // The plugin handle is still valid so we can create a new one
          },
          detached: function() {
            // Connection with the plugin closed, get rid of its features
            // The plugin handle is not valid anymore
          }
        });
      },
      error: function(cause) {
        // Error, can't go on...
        alert("new janus error");
      },
      destroyed: function() {
        // I should get rid of this
      }
    });
  });
</script>

<svelte:head>
  <title>Connect to audiochat</title>
</svelte:head>
<h1>Audiochat</h1>

<p>Hopefully soon</p>

<button on:click={create_room}>create room {room_number}</button>

<!-- <input type="number" bind:value={room_number} />
<input type="number" bind:value={room_number} min="2000" max="999999" /> -->

<button on:click={join_room}>join room</button>

<button on:click={join_public}>join public</button>

<button on:click={publish_stream}>talk</button>

<button on:click={mute}>mute/unmute</button>
