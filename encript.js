
function encryptmsg() {
    let messagestring = document.getElementById('msginput').value;
    let key = document.getElementById('publickeyinput').value;
    let keyarray = key.split(',');
    if (keyarray.length == 2) {
        let e = keyarray[0];
        let n = keyarray[1]


        let msg = [];
        let cipher = [];
        // let msgstr = "";
        for (let i = 0; i < messagestring.length; i++) {
            msg[i] = messagestring.charCodeAt(i);

            //     msg[i] += 100;
            //     msgstr += msg[i].toString();

        }
        // let msgstrint = parseInt(msgstr);
        console.log(msg);
        for (let i = 0; i < msg.length; i++) {
            msg[i] += i;
            cipher[i] = modpow(msg[i], e, n);

        }


        // console.log(msgstr);

        // let cipher = modpow(msgstrint, e, n);
        // for (let i = 0; i < msg.length; i++) {
        // cipher[i] = (msg[i] ** e) % n;



        // }
        console.log(cipher);
        document.getElementById("ciphertext").setAttribute("value", cipher);
        // document.write("<br>");

        // document.write(cipher);


    }


}






