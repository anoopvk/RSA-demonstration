function generatekey() {
    size = 3;
    let p = findprimegreaterthan(size);
    let q = findprimegreaterthan(size);
    // let p = 59;
    // let q = 53;
    // console.log(p);
    // console.log(q);

    let n = p * q;
    let phi = (p - 1) * (q - 1);
    let e = finde(phi);
    // console.log(phi);
    // console.log(e);

    let d = euc(phi, phi, phi, e, 1);
    // d = d % phi;
    // if (d < 0) {
    //     d += phi;
    // }
    // console.log("e=", e);
    // console.log("d=", d);
    // console.log("n=", n);
    document.getElementById("publickey").setAttribute("value", e + "," + n);
    document.getElementById("privatekey").setAttribute("value", d + "," + n);
}


























//phi1 is same as phi in the starting
//e2 is 1
function euc(phie, phi1e, phi2e, e1e, e2e) {
    // console.log(e1e + " " + e2e);
    if (e1e == 0) {
        return null;
    }
    let qe = Math.floor(phi1e / e1e);
    let d1e = phi1e - (qe * e1e);
    let d2e = phi2e - (qe * e2e);
    if (d1e < 0) {
        d1e = d1e % phie;
        d1e += phie;
    }
    if (d2e < 0) {
        d2e = d2e % phie;
        d2e += phie;
    }
    if (d1e == 1) {
        return d2e
    }
    else {
        return euc(phie, e1e, e2e, d1e, d2e);
    }



}

function gcd(a, b) {
    if (a == 0) {
        return b;
    }
    return gcd(b % a, a);
}
function finde(phi) {
    evalue = 3
    while (true) {
        let gcdval = gcd(evalue, phi);

        if (gcdval == 1) {
            return evalue
            break;
        }
        else {
            evalue += 2;
        }
    }
}

function isprime(num) {
    if (num == 2) {
        return num;
    }
    else {
        let flag = 0;
        if (num % 2 == 0) {
            return false;

        }
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            // console.log(num);
            return num;

        }
        else {
            return false;
        }
    }
}

function findprimegreaterthan(digit) {
    let a = (8 * (10 ** (digit - 1)));
    let b = (10 ** (digit - 1));

    let num = Math.floor(Math.random() * a) + b;


    while (true) {
        if (isprime(num)) {
            return num;
            break;
        }
        else {
            num++;
        }
    }
}
