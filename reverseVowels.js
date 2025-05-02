const s="leetcode"
function reverseVowels(s){
    let char=s.split('')
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let start=0
    let end=s.length-1
    while(start<=end){
        if(vowels.includes(char[start])){
            if(vowels.includes(char[end])){
              let temp=char[start]
              char[start]=char[end]
              char[end]=temp
              start++
              end--
            }else{
                end--
            }
        }else{
            start++
        }
    }   
 return char.join('')
}
const ans=reverseVowels(s)
console.log(ans)