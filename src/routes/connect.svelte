<svelte:head>
	<title>Connect to audiochat</title>
</svelte:head>
<script>
import './janus.js'
import './audiobridge.js'

// Janus.init({
//    debug: true,
//    dependencies: Janus.useDefaultDependencies(), // or: Janus.useOldDependencies() to get the behaviour of previous Janus versions
//    callback: function() {
//            console.log("DONE")
//            }
//    });
// var janus = new Janus(
//         {
//                 server: 'http://localhost:8088/janus',
//                 // server: ['ws://yourserver:8188/','http://yourserver:8088/janus'],
//                 success: function() {
//                         // Done! attach to plugin XYZ
//                 },
//                 error: function(cause) {
//                         // Error, can't go on...
//                 },
//                 destroyed: function() {
//                         // I should get rid of this
//                 }
//         });
// janus.attach(
//         {
//                 plugin: "janus.plugin.echotest",
//                 success: function(pluginHandle) {
//                         // Plugin attached! 'pluginHandle' is our handle
//                 },
//                 error: function(cause) {
//                         // Couldn't attach to the plugin
//                 },
//                 consentDialog: function(on) {
//                         // e.g., Darken the screen if on=true (getUserMedia incoming), restore it otherwise
//                 },
//                 onmessage: function(msg, jsep) {
//                         // We got a message/event (msg) from the plugin
//                         // If jsep is not null, this involves a WebRTC negotiation
//                 },
//                 onlocalstream: function(stream) {
//                         // We have a local stream (getUserMedia worked!) to display
//                 },
//                 onremotestream: function(stream) {
//                         // We have a remote stream (working PeerConnection!) to display
//                 },
//                 oncleanup: function() {
//                         // PeerConnection with the plugin closed, clean the UI
//                         // The plugin handle is still valid so we can create a new one
//                 },
//                 detached: function() {
//                         // Connection with the plugin closed, get rid of its features
//                         // The plugin handle is not valid anymore
//                 }
//         });
</script>
<h1>Audiochat</h1>

<p>Hopefully soon</p>