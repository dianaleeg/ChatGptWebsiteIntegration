# Chatgpt Website Integration

This is a short demo that integrates chatcpt into a simple site.

The site contains a form prompting the user to put in a question. The question is then sent to chatgpt for a response. The response is shown on the site. 
In addition, a specific 'expertise' is requested from chatgpt to hyperfocus on a particular topic i.e. 'You're a Candle Sales Expert.' and will only field questions relating to their expertise.

** Data Flow: 
**
Request
index.html -> frontend.js -> server.js

Response
server.js -> frontend.js -> index.html
