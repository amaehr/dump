<script>
  import { onMount } from "svelte";
  import { Janus } from "janus-gateway";

  onMount(() => {
    Janus.init({
      debug: true,
      dependencies: Janus.useDefaultDependencies(),
      callback: function() {}
    });

    let janus = new Janus({
      server: [
        "ws://localhost:2095",
        "wss://localhost:2096",
        "http://localhost:8080/janus",
        "https://localhost:8443/janus"
      ],
      iceServers: [
        "stun.l.google.com:19302",
        "stun1.l.google.com:19302",
        "stun2.l.google.com:19302",
        "stun3.l.google.com:19302",
        "stun4.l.google.com:19302",
        "stun.ekiga.net",
        "stun.ideasip.com",
        "stun.rixtelecom.se",
        "stun.schlund.de",
        "stun.stunprotocol.org:3478",
        "stun.voiparound.com",
        "stun.voipbuster.com",
        "stun.voipstunt.com",
        "stun.voxgratia.org"
      ],
      success: function() {
        // Done! attach to plugin XYZ
        console.log("success");
      },
      error: function(cause) {
        // Error, can't go on...
        console.log("error");
      },
      destroyed: function() {
        // I should get rid of this
      }
    });
    // janus.attach({
    //         plugin: "janus.plugin.echotest",
    //         success: function (pluginHandle) {
    //                 // Plugin attached! 'pluginHandle' is our handle
    //                 console.log("echo läuft")
    //         },
    //         error: function (cause) {
    //                 // Couldn't attach to the plugin
    //         },
    //         consentDialog: function (on) {
    //                 // e.g., Darken the screen if on=true (getUserMedia incoming), restore it otherwise
    //         },
    //         onmessage: function (msg, jsep) {
    //                 // We got a message/event (msg) from the plugin
    //                 // If jsep is not null, this involves a WebRTC negotiation
    //         },
    //         onlocalstream: function (stream) {
    //                 // We have a local stream (getUserMedia worked!) to display
    //         },
    //         onremotestream: function (stream) {
    //                 // We have a remote stream (working PeerConnection!) to display
    //         },
    //         oncleanup: function () {
    //                 // PeerConnection with the plugin closed, clean the UI
    //                 // The plugin handle is still valid so we can create a new one
    //         },
    //         detached: function () {
    //                 // Connection with the plugin closed, get rid of its features
    //                 // The plugin handle is not valid anymore
    //         }
    // });
  });
</script>

<svelte:head>
  <title>Connect to audiochat</title>
</svelte:head>
<h1>Audiochat</h1>

<p>Hopefully soon</p>
