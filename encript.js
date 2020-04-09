

let messagestring = "anoop";
let msg = [];
let cipher = [];
for (let i = 0; i < messagestring.length; i++) {
    msg[i] = messagestring.charCodeAt(i);

}
console.log(msg);

for (let i = 0; i < msg.length; i++) {
    cipher[i] = (msg[i] ** e) % n;

}
console.log(cipher);

document.write("<br>");

document.write(cipher);