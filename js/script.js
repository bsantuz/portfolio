let lowRes = false

const navMenu = document.querySelector("#nav-menu")
const quantExp = document.querySelector("#container_exp").childElementCount
const carrousels = document.querySelector("#carousels")

let scrolltemp = 0;

let idxCarousel = 0;
let quantShowing = 3;
const projectWidht = document.querySelector("#container-projects").children[0].clientWidth
const projectLength = document.querySelector("#container-projects").children.length


function ishiden(el)
{ 
    return el.style.display === "none" ? true : false 
}

function togledHiden(el, hiden = false)
{ 
    ishiden(el)? el.style.display = "flex" : el.style.display = "none" 
}

function islowRes()
{
   return window.innerWidth < 781 ? true : false
}

function buttonShowMenu()
{
    if (islowRes()) 
    {
        togledHiden(navMenu)  
    }  
}

function ifNavBarhiden()
{
    if(!islowRes() && lowRes)
    {
        lowRes = false
        if (ishiden(navMenu)) 
        {
            togledHiden(navMenu)
        }
    }
    else if(islowRes() && !lowRes)
    {
        lowRes = true
        togledHiden(navMenu)
    }
}

function setDisplayNone(el, hiden)
{
    if(hiden)
    {
        el.style.display  = hiden
    }
    else
    {
        if (el.style.display  != "none") 
        {
            el.style.display  = "none"
        }
        else
        {
            el.style.display  = "flex"
        }
    }
}

function buttonExperiencies(id)
{
    let el = document.getElementById(id)
    setDisplayNone(el)
}

function carouselForm()
{
    const carousel = document.getElementById("carousels")
    if (window.innerWidth < 900) 
    {
        carousel.style.width = "250px"
        quantShowing = 1;
    }
    else
    {
        carousel.style.width = "740px"
        quantShowing = 3;
    }
}

function carouselsNext(){
    if (carrousels.scrollLeft < projectLength * projectWidht ) {
        carrousels.scrollLeft += projectWidht;
    }
}

function carouselsBack(){
    if (carrousels.scrollLeft > projectWidht) {
        carrousels.scrollLeft -= projectWidht;
    }
}

function moveLabel(name){

    const el = n => document.querySelector(`#${n}`)

    el(name).addEventListener("focus", () => 
    {
        el("l"+name).style.top = "0";
    });

    el(name).addEventListener("blur", () => 
    {
        if(!el(name).value)
        {
            el("l"+name).style.color = "#FF4500"
            el("l"+name).style.top = "15px";
        }
        else
        {
            el("l"+name).style.color = "#00FA9A"
        }
    });

    el("l"+name).style.top = "15px";
}

function copy(el){
    document.getElementById(el).addEventListener("click", ()=>
    {
        navigator.clipboard.writeText(document.getElementById(el).innerText)
        alert("O texto copiado foi: " + document.getElementById(el).innerText);
    });
}

//----ao abrir o site-----

//Esconde as descrições das exp
for (let index = 1; index <= quantExp +1; index++) {
    buttonExperiencies("p_exp0"+index)
}

window.addEventListener("scroll", function(event) 
{          
    let scroll_y = this.scrollY;
    let menu = this.document.getElementById("menu-inicial")

    if(scrolltemp > scroll_y )
    {
        scrolltemp = scroll_y
        menu.style.top = "0px"
    }
    else
    {
        scrolltemp = scroll_y
        menu.style.top = "-99px"
    }

});

window.addEventListener('resize', () => {

    ifNavBarhiden()

    carouselForm()
});

ifNavBarhiden()
carouselForm()

moveLabel("name")
moveLabel("subject")
moveLabel("email")

copy("copyEmail")
copy("copyTelefone")




