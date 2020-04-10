<script>
  import { onMount } from "svelte";
  import { Janus } from "janus-gateway";

  let mixer = null;
  let janus = null;

  onMount(() => {
    Janus.init({
      debug: true,
      dependencies: Janus.useDefaultDependencies(),
      callback: function() {
        console.log("init success");
      }
    });
    let janus = new Janus({
      server: [
        "wss://localhost:2096",
        "ws://localhost:2095",
        "https://localhost:8443/janus",
        "http://localhost:8080/janus"
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
            Janus.log("Plugin attached!", pluginHandle);
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
              alert("consent missing");
            }
          },
          onmessage: function(msg, jsep) {
            // We got a message/event (msg) from the plugin
            // If jsep is not null, this involves a WebRTC negotiation
            Janus.debug(" ::: Got a message :::");
            Janus.debug(msg);
            var event = msg["audiobridge"];
            Janus.debug("Event: " + event);
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

  let room = null

  function register() {
    // let register = { request: "join", room: 1234};
    let register = { request: "join"};
    mixer.send({ message: register });

  }

  let muted = false
  function mute() {
    // let register = { request: "join", room: 1234};
    // mixer.send({ message: register });
    muted = !muted
    let mute = { request: "configure", muted: muted};
    mixer.send({ message: mute});
  }
</script>

<svelte:head>
  <title>Connect to audiochat</title>
</svelte:head>
<h1>Audiochat</h1>

<p>Hopefully soon</p>


<button on:click={register}>
join room
</button>

<button on:click={mute}>
mute/unmute
</button>