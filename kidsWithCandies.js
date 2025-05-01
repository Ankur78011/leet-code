const candies = [2,3,5,1,3]
const extraCandies = 3
function kidsWithCandies(candies,extraCandies){
    let max=candies[0]
    for(let i=0;i<candies.length;i++){
        if(candies[i]>max){
            max=candies[i]
        }
    }
for(let i=0;i<candies.length;i++){
    if(candies[i]+extraCandies>=max){
        candies[i]=true
    }else{
        candies[i]=false
    }
}
return candies
}
const ans=kidsWithCandies(candies,extraCandies)
console.log(ans)