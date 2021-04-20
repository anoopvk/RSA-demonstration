Live demo link: https://rsa-demo-anoop.netlify.app/

# RSA demonstration
 A demonstration on RSA cryptosystem

RSA algorithm is asymmetric cryptography algorithm. Asymmetric actually means that it works on two different keys i.e. Public Key and Private Key. As the name describes that the Public Key is given to everyone and Private key is kept private.

The idea of RSA is based on the fact that it is difficult to factorize a large integer. The public key consists of two numbers where one number is multiplication of two large prime numbers. And private key is also derived from the same two prime numbers. So if somebody can factorize the large number, the private key is compromised. Therefore encryption strength totally lies on the key size and if we double or triple the key size, the strength of encryption increases exponentially. RSA keys can be typically 1024 or 2048 bits long, but experts believe that 1024 bit keys could be broken in the near future. But till now it seems to be an infeasible task.

However, since this is made for demonstration purposes, keys of small sizes are used.

Here you can use this tool to encrypt a message from your friend. The steps involved are:
 -Generate random keys.(The reciever of the message needs to generate keys)
 -Give the Public key to your friend (the sender) and ask them to encrypt their message using this key and sent you the cipher.
 -Decrypt the cipher using your Private key (known only to you).
 
