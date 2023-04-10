import './App.css'

function App() {
    // https://hackertyper.net/#
    // https://codepen.io/danbulant/pen/rvBvGM

    let code = `
import socket

# Define the IP address and port number to connect to
ip_address = '192.168.1.1'
port = 8080

# Create a socket object with error handling
try:
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
except socket.error as err:
    print("Socket creation failed with error: %s" % err)
    exit()

# Connect to the server with error handling
try:
    client_socket.connect((ip_address, port))
except socket.gaierror as err:
    print("Address resolution failed with error: %s" % err)
    client_socket.close()
    exit()
except socket.error as err:
    print("Socket connection failed with error: %s" % err)
    client_socket.close()
    exit()

# Send a message to the server requesting access
access_request = b'access_request'
try:
    client_socket.sendall(access_request)
except socket.error as err:
    print("Socket send failed with error: %s" % err)
    client_socket.close()
    exit()

# Receive a response from the server with error handling
try:
    response = client_socket.recv(1024)
except socket.error as err:
    print("Socket receive failed with error: %s" % err)
    client_socket.close()
    exit()

# Check if access was granted and respond accordingly
if response == b'access_granted':
    print('Access granted')
else:
    print('Access denied')

# Close the socket connection
client_socket.close()
`;


    let i = 0;
    document.addEventListener("keydown", function () {
        let terminal = document.getElementById("terminal");
        terminal.innerText += code.slice(i, i + 5);
        i += 5;
        if (i > code.length) {
            i = 1;
        }
    });

    setInterval(function () {
        let term = document.getElementById("terminal");
        term.scrollTop = term.scrollHeight;
    }, 100);

    return (
        <>
            <div className="terminal" id="terminal"></div>
        </>
    )
}

export default App;
