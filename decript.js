// let cipher = ["2716"];
let msgdecript = [];
msgdecriptstring = [];
var deckey = BigInt(d);
var nkey = BigInt(n);
for (let i = 0; i < cipher.length; i++) {
    var cip = BigInt(cipher[i]);
    var deckey = BigInt(d);
    msgdec = (cip ** deckey) % nkey;
    msgdecript[i] = Number(msgdec);
    // msgdecript[i] = String.fromCharCode(msgdecript[i]);

}
for (let i = 0; i < msgdecript.length; i++) {
    msgdecriptstring[i] = String.fromCharCode(msgdecript[i]);

}
console.log(msgdecript);
document.write("<br>");

document.write(msgdecriptstring);