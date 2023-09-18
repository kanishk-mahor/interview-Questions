const arr = [-1,-2,4,6,2,2,0]
const k = 4
const obj = {}
count = 0
for (let i of arr){
    if(!obj[k-i]){
        obj[k-i] = i
    }
}

for(let i of arr){
    if(obj[i] != null){
        count ++
    }
}

console.log(count /2)