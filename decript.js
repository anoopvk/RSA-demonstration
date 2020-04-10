// var time1 = performance.now();


function decryptmsg() {
    let cipher = document.getElementById('cipherinput').value;

    var cipherstring = cipher.split(',');
    console.log(cipherstring);
    let key = document.getElementById('privatekeyinput').value;
    var keyarray = key.split(',');
    console.log(keyarray);
    if (keyarray.length == 2) {
        let d = keyarray[0];
        let n = keyarray[1];
        let cipherint = [];
        let msgdecriptint = [];
        let msg = [];
        let msgoutput = "";

        for (let i = 0; i < cipherstring.length; i++) {
            cipherint[i] = Number(cipherstring[i]);
            msgdecriptint[i] = modpow(cipherint[i], d, n);
            msgdecriptint[i] -= i;
            msg[i] = String.fromCharCode(msgdecriptint[i]);
            msgoutput += msg[i];
        }
        // console.log(msgdecriptint);

        // console.log(msgoutput);






        // document.write("<br>");
        document.getElementById("messagetext").setAttribute("value", msgoutput);

    }
    // document.write(msgdecriptstring);


}

//time measure
// var time2 = performance.now();
// alert('It took ' + (time2 - time1) + ' ms.');








// var deckey = BigInt(d);
// var nkey = BigInt(n);

// for (let i = 0; i < cipher.length; i++) {
//     // var cip = BigInt(cipher[i]);
//     // var deckey = BigInt(d);
//     // msgdec = (cip ** deckey) % nkey;
//     // msgdecript[i] = Number(msgdec);
//     msgdecript[i] = modpow(cipher[i], d, n);

//     // msgdecript[i] = String.fromCharCode(msgdecript[i]);
//     msgdecriptstring[i] = String.fromCharCode(msgdecript[i]);


// }










