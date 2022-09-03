var quantExp = document.getElementById("container_exp").childElementCount

var scrolltemp = 0;

const mql = window.matchMedia("(max-width: 780px)")

var idxCarousel = 0;
var quantShowing = 3;
var widthMove = 250;
var container = document.getElementById("container-projects");
var countItens = container.childElementCount;

const cmql = window.matchMedia("(max-width: 1000px)")

function setDisplayNone(el, hiden){
    if(hiden){
        el.style.display  = hiden
    }else{
        if (el.style.display  != "none") {
            el.style.display  = "none"
        }else{
            el.style.display  = "flex"
        }
    }
}

function buttonShowMenu(hiden){
    var el = document.getElementById("nav-menu")

    const mql = window.matchMedia("(max-width: 780px)")

    if (mql.matches) {
        if(hiden){
            setDisplayNone(el, hiden)
        }else{
            setDisplayNone(el)
        }
    } 
}

function buttonExperiencies(id){
    var el = document.getElementById(id)
    setDisplayNone(el)
}

function confOneCarousel(){
    document.getElementById("container-projects").style.left = "350px"
    document.getElementById("carousels").style.width = "200px"
    widthMove = 200
    quantShowing = 2;
}
function confthreeCarousel(){
    document.getElementById("container-projects").style.left = "375px"
    document.getElementById("carousels").style.width = "740px"
    widthMove = 250
    quantShowing = 3;
}

function carouselsNext(){
    if (countItens - quantShowing > idxCarousel) {
        idxCarousel ++;
        var x = idxCarousel * -250;
        container.style.transform = "translateX("+x+"px)";
    }
}

function carouselsBack(){
    if (0 < idxCarousel) {
        idxCarousel --;
        var x = idxCarousel * -250;
        container.style.transform = "translateX("+x+"px)";
    }
}

function moveLabel(name){
    document.getElementById(name).addEventListener("focus", () => {
        document.getElementById("l"+name).style.top = "0";
    });
    document.getElementById(name).addEventListener("blur", () => {
        if(!document.getElementById(name).value){
            document.getElementById("l"+name).style.color = "#FF4500"
            document.getElementById("l"+name).style.top = "20px";
        }else{
            document.getElementById("l"+name).style.color = "#00FA9A"
        }
    });
    document.getElementById("l"+name).style.top = "20px";
}

function copy(el){
    document.getElementById(el).addEventListener("click", ()=>{
        navigator.clipboard.writeText(document.getElementById(el).innerText)
        alert("O texto copiado foi: " + document.getElementById(el).innerText);
    });
}

//----ao abrir o site-----

//Esconde as descrições das exp
for (let index = 1; index <= quantExp +1; index++) {
    buttonExperiencies("p_exp0"+index)
}

window.addEventListener("scroll", function(event) {
            
    var scroll_y = this.scrollY;
    var menu = this.document.getElementById("menu-inicial")

    if(scrolltemp > scroll_y ){
        scrolltemp = scroll_y
        menu.style.top = "0px"
    }
    else{
        scrolltemp = scroll_y
        menu.style.top = "-99px"
    }

    });

// mostra ou esconde os menus, baseado na resolução 780px
if (cmql.matches) {
    confOneCarousel()
} else{
    confthreeCarousel()
}

if (mql.matches) {
    buttonShowMenu("none");
} else{
    buttonShowMenu("flex");
}

mql.onchange = (e) => {
    if (e.matches) {
        buttonShowMenu("none");
    } else{
        buttonShowMenu("flex");
    }
}

//muda a quantidade de projetos exibidos baseado na resolução 1000px
cmql.onchange = (e) => {
    if (e.matches) {
        confOneCarousel()
    } else{
        confthreeCarousel()
    }
}

moveLabel("name")
moveLabel("subject")
moveLabel("email")

copy("copyEmail")
copy("copyTelefone")
