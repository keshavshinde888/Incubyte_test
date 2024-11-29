function check(num){
    if('0'<=num && num<='9'){
        return true;
    }
  return false  
}
function add(numbers){
  let ans=0;
  let arr=numbers.split("")
  for(let i=0;i<arr.length;i++){
    let isNum=check(parseInt(arr[i]))
    if(isNum){ 
        if(i!=0 && arr[i-1]=='-') return "negative numbers not allowed";
        let preNum=parseInt(arr[[i]]),sum=parseInt(arr[i]);
        while((i+1)<arr.length && check(parseInt(arr[i+1]))){
            sum=preNum*10+parseInt(arr[i+1])
            preNum=sum
            i++;
        }
        ans=ans+sum
        preNum=0
        sum=0;
    }
  }

  return ans;
}

console.log(add(",")) 
console.log(add("1,5")) 
console.log(add("1")) 
console.log(add("1\n2,3")) 
console.log(add("//;\n1;2")) 
console.log(add("-1/9")) 
