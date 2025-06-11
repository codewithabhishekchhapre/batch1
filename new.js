
var num=78945;
var rev="";
while(num>0){
     var rem=num%10;
     rev+=rem;
     num=parseInt(num/10)
}

console.log(rev)