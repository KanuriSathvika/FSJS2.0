/**24. Write a program to create two array "even" and "odd" having 
 * even and odd number between the 0 to 100 (0 and 100 included).
 */

const even=[];
const odd=[];
for(let i=0;i<=100;i++){
      if(i%2==0){
        even.push(i);  
      }
      else{
        odd.push(i);
      }
}
console.log("Even numbers:",even);
console.log("Odd numbers:",odd);
