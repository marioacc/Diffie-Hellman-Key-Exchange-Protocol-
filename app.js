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

 
