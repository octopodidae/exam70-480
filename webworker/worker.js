onmessage = function(event) {
    console.log("message received in the worker");
    postMessage("pong");
}