const var1="ABABAB"
const var2="ABAB"

function gcfOfStrings(str1,str2){
if(str1+str2!==str2+str1) return ""
let minV=Math.min(str1.length,str2.length)
let hcf=0
for(let i=1;i<=minV;i++){
    if(str1.length%i===0&&str2.length%i===0){
    hcf=i
    }
}
return str1.slice(0,hcf)
}

const ans=gcfOfStrings(var1,var2)
console.log(ans)