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
    if(hiden){
        setDisplayNone(el, hiden)
    }else{
        setDisplayNone(el)
    }

}

function buttonExperiencies(id){
    var el = document.getElementById(id)
    setDisplayNone(el)
}

var q = 3;
for (let index = 1; index <= q; index++) {
    buttonExperiencies("p_exp0"+index)
}

var scrolltemp = 0;
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

const mql = window.matchMedia("(max-width: 780px)")

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

var idxCarousel = 0;
var container = document.getElementById("container-projects");
var countItens = container.childElementCount;

function carouselsNext(){
    if (countItens - 3 > idxCarousel) {
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

moveLabel("name")
moveLabel("subject")
moveLabel("email")

function copy(el){
    document.getElementById(el).addEventListener("click", ()=>{
        navigator.clipboard.writeText(document.getElementById(el).innerText)
        alert("O texto copiado foi: " + document.getElementById(el).innerText);
    });
}

copy("copyEmail")
copy("copyTelefone")
