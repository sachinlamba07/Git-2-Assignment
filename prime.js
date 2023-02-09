let number=5;
let flag=true;
for(let i=2;i<=number/2;i++)
{
    if(number%i==0)
    {
        flag=false;
        break;
    }
}
if(flag==true)
{
    console.log("prime");

}
else{
    console.log("Not Prime");
}