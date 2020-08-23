let btn=document.getElementById("btn");
let arrow=document.getElementById("arrow");
let don=document.getElementById("hid");
let ref=document.getElementById("r");
let x="";
let count=0;
var m=0;
var n=0;
var k=0;
function spin()
{
    
    btn.classList.add("hidden");
    
    count++;
    x=x+500+Math.floor(Math.random()*361);
    if(count>2)
    {
        x=0;count=0;
        spin();
    }
    else{
        arrow.style.WebkitTransform="rotate("+x+"deg)";
   }
   
   k=setTimeout(display,1000);
}
function display()
{
    ref.classList.add("hidden");
    clearTimeout(k);
    don.classList.remove("hidden");
   n=setTimeout(l,2150);
}
function l()
{
    document.getElementById("par").innerHTML="Other players has to give task to Player pointed by arrow";
    m=setTimeout(j,2100);
    clearTimeout(n);
}

function j()
{
    ref.classList.remove("hidden");
    document.getElementById("par").innerHTML="press close to spin again";
    clearTimeout(m);
}
function rev()
{
    document.getElementById("par").innerHTML="Player pointed by arrow has to select \"truth\" or \"dare\"";
    don.classList.add("hidden");
    btn.classList.remove("hidden");
}


