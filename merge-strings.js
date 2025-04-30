/* 

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
 If a string is longer than the other, append the additional letters onto the end of the merged string.

*/
let w1="ab"
let w2="pqrs"

function mergeSrting(w1,w2){
 let minLen=Math.min(w1.length,w2.length)
 let ans='';
 for (let i=0;i<minLen;i++){
 ans=ans+w1[i]
 ans=ans+w2[i]
 }
 if(w1.length>w2.length){
    ans=ans+w1.slice(minLen,w1.length)
 }else{
    ans=ans+w2.slice(minLen,w2.length)
 }
 return ans
    
}


const res=mergeSrting(w1,w2)
console.log(res)

