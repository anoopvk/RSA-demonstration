function copytoclipboard(idd) {
    var copyText = document.getElementById(idd);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
function modpow(base, exponent, modulus) {
    if (modulus == 1) {
        return 0
    }
    let c = 1;
    for (let index = 0; index < exponent; index++) {
        c = (c * base) % modulus;

    }
    return c;
}


