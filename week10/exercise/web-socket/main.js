const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output');
const form = document.forms[0];
const connection = new WebSocket(URL);


function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}



// output funcion
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}
// when 

form.addEventListener('submit', message, false);
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);



// listen to a response.
        connection.addEventListener('message', (event) => {
            output(`RESPONSE: ${event.data}`);
            }, false);



            connection.addEventListener('close', () => {
                output('DISCONNECTED');
            }, false);
            
            connection.addEventListener('error', (event) => {
            output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
            }, false);