var readlineSync = require('readline-sync');

function getValues(){
	var user = readlineSync.question('Write A for Alice and B for Bob:');
	if (user === 'A' || user === 'a'){
		console.log("Hi Alice");
		user = 'Alice'
	}else
	if (user === 'B' || user === 'b'){
		console.log("Hi Bob");
		user = 'Bob'
	} else { 
		console.log("WTF");
	}
	var base = readlineSync.question("Write common base(alpha) for " + user + ":");
	var q = readlineSync.question("Write common q value for " +user + ":");
	var private_key = readlineSync.question("Write private key for " +user + ":");
	//console.log("User: " + user + base + q + private_key);
	var public_key = getPublicKey(base,private_key,q);
	var other_public_key = readlineSync.question("Write public key for the other party:");
	getSessionKey(private_key,other_public_key,q);
}
function getPublicKey(alpha,private,q) {
	console.log("Your public key is: " + fast_exp(alpha,private,q)); 
	return fast_exp(alpha,private,q);
}
function getSessionKey(private_key, public_key, q){
	console.log("Your session key is: " + fast_exp(public_key,private_key,q));
}

function fast_exp(base, exp, q) {
   if (exp === 0) {
     return 1;
   } else {
       if (exp % 2 === 0) {
       return fast_exp(base * base % q, exp / 2, q);
     } else {
       return base * fast_exp(base, exp - 1, q) % q;
     }
   }
 }
 getValues();

 
