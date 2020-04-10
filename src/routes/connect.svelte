<script>
  import { onMount } from "svelte";
  import { Janus } from "janus-gateway";

  // Client variables
  let mixer = null;
  var webrtcUp = false;
  var audioenabled = false;
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
    webrtcUp = true;
    mixer.createOffer({
      media: { video: false }, // This is an audio only room
      success: function(jsep) {
        Janus.debug("Got SDP!");
        Janus.debug(jsep);
        var publish = { request: "configure", muted: false };
        mixer.send({ message: publish, jsep: jsep });
      },
      error: function(error) {
        Janus.error("WebRTC error:", error);
      }
    });
  }

  onMount(() => {
    Janus.init({
      // TODO remove
      debug: "all",
      dependencies: Janus.useDefaultDependencies()
    });
    let janus = new Janus({
      server: [
        "wss://" + window.location.hostname + ":2096",
        "ws://" + window.location.hostname + ":2095",
        "https://" + window.location.hostname + ":8443/janus",
        "http://" + window.location.hostname + ":8080/janus"
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
            Janus.debug(
              "Consent dialog should be " + (on ? "on" : "off") + " now"
            );
            if (on) {
              // TODO implement help
              Janus.error("Consent missing?");
            }
          },
          onmessage: function(msg, jsep) {
            Janus.debug(" ::: Got a message :::");
            Janus.debug(msg);
            var event = msg["audiobridge"];
            Janus.debug("Event: " + event);
            if (event != undefined && event != null) {
              if (event === "joined") {
                // Successfully joined, negotiate WebRTC now
                if (msg["id"]) {
                  let myid = msg["id"];
                  Janus.log(
                    "Successfully joined room " +
                      msg["room"] +
                      " with ID " +
                      myid
                  );
                  if (!webrtcUp) {
                    webrtcUp = true;
                    // Publish our stream
                    mixer.createOffer({
                      media: { video: false }, // This is an audio only room
                      success: function(jsep) {
                        Janus.debug("Got SDP!");
                        Janus.debug(jsep);
                        var publish = { request: "configure", muted: false };
                        mixer.send({ message: publish, jsep: jsep });
                      },
                      error: function(error) {
                        Janus.error("WebRTC error:", error);
                      }
                    });
                  }
                }
                // Any room participant?
                if (
                  msg["participants"] !== undefined &&
                  msg["participants"] !== null
                ) {
                  var list = msg["participants"];
                  Janus.debug("Got a list of participants:");
                  Janus.debug(list);
                }
              } else if (event === "destroyed") {
                // The room has been destroyed
                Janus.warn("The room has been destroyed!");
              } else if (event === "event") {
                if (
                  msg["participants"] !== undefined &&
                  msg["participants"] !== null
                ) {
                  var list = msg["participants"];
                  Janus.debug("Got a list of participants:");
                  Janus.debug(list);
                  for (var f in list) {
                    var id = list[f]["id"];
                    var display = list[f]["display"];
                    var setup = list[f]["setup"];
                    var muted = list[f]["muted"];
                    Janus.debug(
                      "  >> [" +
                        id +
                        "] " +
                        display +
                        " (setup=" +
                        setup +
                        ", muted=" +
                        muted +
                        ")"
                    );
                  }
                } else if (
                  msg["error"] !== undefined &&
                  msg["error"] !== null
                ) {
                  if (msg["error_code"] === 485) {
                    // This is a "no such room" error: give a more meaningful description
                    alert("<p>Room " + room_number + " does not exist...");
                  } else {
                    alert(msg["error"]);
                  }
                  return;
                }
              }
            }
            if (jsep !== undefined && jsep !== null) {
              Janus.debug("Handling SDP as well...");
              Janus.debug(jsep);
              mixer.handleRemoteJsep({ jsep: jsep });
            }
          },
          // onmessage: function(msg, jsep) {
          //   // We got a message/event (msg) from the plugin
          //   // If jsep is not null, this involves a WebRTC negotiation
          //   Janus.debug(" ::: Got a message :::");
          //   Janus.debug(msg);
          //   var event = msg["audiobridge"];
          //   Janus.debug("Event: " + event);
          //   if (event === "joined" || event === "created") {
          //     room_number = msg["room"];
          //     console.log(room_number);
          //   }
          // },
          onlocalstream: function(stream) {
            // We have a local stream (getUserMedia worked!) to display
            Janus.debug(" ::: Got a local stream :::");
            Janus.debug(stream);
          },
          onremotestream: function(stream) {
            // We have a remote stream (working PeerConnection!) to display
            Janus.debug(" ::: Got a remote stream :::");
            Janus.debug(stream);
          },
          oncleanup: function() {
            // PeerConnection with the plugin closed, clean the UI
            // The plugin handle is still valid so we can create a new one
            webrtcUp = false;
            Janus.log(" ::: Got a cleanup notification :::");
          },
          detached: function() {
            // Connection with the plugin closed, get rid of its features
            // The plugin handle is not valid anymore
          }
        });
      },
      error: function(cause) {
        // Error, can't go on...
        Janus.debug(" ::: Got an error while new Janus() :::");
        Janus.debug(cause);
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
<p>
  <button on:click={create_room}>create room:</button>

  <input type="number" bind:value={room_number} min="2000" max="999999" />
</p>
<!-- <input type="number" bind:value={room_number} /> -->
<p>
  <button on:click={join_room}>join room:</button>

  <input type="number" bind:value={room_number} min="2000" max="999999" />
</p>
<button on:click={join_public}>join public</button>

<!-- <button on:click={publish_stream}>talk</button> -->
<p>
  <button on:click={mute}>mute/unmute</button>
</p>
