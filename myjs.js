function conff()
{   
    console.log("converting from fahrenheit");
    let f=parseInt(document.getElementById("fah").value);
    let c=5/9 *(f-32);
    let k=(f-32)*(5/9)+273.15;
    document.getElementById("cel").value=c;
    document.getElementById("kel").value=k;

}
function confc()
{
    console.log("converting from celcius");
    let c=parseInt(document.getElementById("cel").value)                                        ;
    let f=c*(9/5)+32 ;
    let k=c+273.15;
    document.getElementById("fah").value=f;
    document.getElementById("kel").value=k;
}
function confk()
{
    console.log("converting from kelvin");
    let k= parseInt(document.getElementById("kel").value);
    let c=k-273.15
    let f=(k-273.15)*(9/5)+32;
    document.getElementById("cel").value=c;
    document.getElementById("fah").value=f;
}