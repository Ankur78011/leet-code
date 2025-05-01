const flowerbed = [1,0,0,0,1]
const  n = 1
function canPlaceFlowers(flowerbed,n){
    let count=0
    let len =flowerbed.length
    for(let i=0;i<flowerbed.length;i++){
       if(flowerbed[i]===0){
        let leftEmpty=(i==0)||(flowerbed[i-1]===0)
        let rigthEmpty=(i==flowerbed.length-1)||(flowerbed[i+1]===0)
        if(leftEmpty && rigthEmpty){
            flowerbed[i]=1
            count++
        }
       }
    }
    return count>=n
}
const ans=canPlaceFlowers(flowerbed,n)

console.log(ans)
