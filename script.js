
//1
function replaceWith(str,replace,replaceValue){
	let result = "";
    for(let i = 0; i < str.length; i++){
    	if(str[i] === replace){
			result += replaceValue;
		}else{
			result += str[i]; 
		}
    }
	return result;
}

replaceWith("awesome", "e", "z")
replaceWith("Foo", "F", "B")

//2
function expand(arr,num){
    let newArray = [];
    for(let i = 0; i < num ; i ++){
        newArray.push(arr)
    }
    return newArray.flat();
}
expand([1,2,3],3);
expand(["foo", "test"],1);

//3
function acceptNumbersOnly(){
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== "number" || isNaN(arguments[i]) ){
            return false
        }
    }return true
 }
 acceptNumbersOnly(1,"foo")
 acceptNumbersOnly(1,2,3,4,5,6,7)
 acceptNumbersOnly(1,2,3,4,5,6,NaN)

//4

function mergeArrays(arr1, arr2){
    let newNum = arr1.concat(arr2)
        newNum.sort(function(a,b){
            return a -b
        })
            return newNum
}

mergeArrays([2,1],[3,4])

//5
var obj1= {
    name: "Foo",
    num: 33
}
var obj2 = {
    test: "thing",
    num: 55
}


function mergeObjects(obj1, obj2){
for(let key in obj2){
    obj1[key] = obj2[key]
}
return obj1
}

mergeObjects(obj1, obj2);

