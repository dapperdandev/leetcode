export function isPalindrome(x: number): boolean {
   const isZero = x === 0;
   const isMultipleOfTen = x % 10 === 0;
   const isNegative = x < 0;

   if (isNegative || isMultipleOfTen && !isZero) {
     return false;
   }
   
   let reversed = 0;
   while(x > reversed) {
     let lastDigit = x % 10;
     reversed = reversed * 10 + lastDigit;
     x = Math.floor(x / 10);
   }

   return x === reversed || x === Math.floor(reversed / 10);
}
