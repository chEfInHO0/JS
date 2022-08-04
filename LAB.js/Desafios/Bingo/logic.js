function range(start,end){ //(1,5) -> [1,2,3,4,5]
    let simpleArray = []
    if (start>end){
        for(let c=0;start!=end<start;c++){
            simpleArray.push(start);
            start--
        }
    }else{
        for(let c=0;c<end;c++){
            simpleArray.push(start);
            start++
        }
    }
    return simpleArray
}

const test = range(5,1)
//console.log(test)

function test(x,y){
    simpleArray2 = []
    simpleArray2.fill(x,y)
    return simpleArray2
}
const test2 = test(1,5)
var arr = Array.from(Array(75).keys())
var listArr = new Array(Math.ceil(arr.length / n)).fill().map(_ => arr.splice(0,15))