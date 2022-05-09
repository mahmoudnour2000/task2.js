let myBody = document.querySelector("body");
let head = document.createElement("header");
let logo = document.createElement("h2");
let mnu = document.createElement("ul");
let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");
let list4 = document.createElement("li");

let textlo = document.createTextNode("Mahmoud Nour");
let textli = document.createTextNode("Home");
let textl2 = document.createTextNode("Avout");
let textl3 = document.createTextNode("Service");
let textl4 = document.createTextNode("Content");

head.className = "header";
textlo.className = "logo";
mnu.className = "menu";

head.appendChild(logo);
head.appendChild(mnu);
mnu.appendChild(list1);
mnu.appendChild(list2);
mnu.appendChild(list3);
mnu.appendChild(list4);
logo.appendChild(textlo);
list1.appendChild(textli);
list2.appendChild(textl2);
list3.appendChild(textl3);
list4.appendChild(textl4);

document.body.appendChild(head);

myBody.style.cssText= "background-color: rgb(236, 236, 236); margin:0; font-family: Tahoma, Arial"
head.style.cssText="display:flex; justify-content:space-between; padding: 20px; background-color: rgb(255, 255, 255); align-items:center;"  ;
mnu.style.cssText= "display:flex; list-style: none; marign: 0px; " 
logo.style.cssText= "color: rgb(35, 169, 110); font-size:26;"
list1.style.cssText= "padding-left: 20px; opacity: 0.7;"
list2.style.cssText= "padding-left: 20px; opacity: 0.7;"
list3.style.cssText= "padding-left: 20px; opacity: 0.7;"
list4.style.cssText= "padding-left: 20px; opacity: 0.7;"


let Div = document.createElement("div");

for (n=1; n<=15; n++){

    
    let child = document.createElement("div");
    let span = document.createElement("span");
    let mytext = document.createTextNode("Product");
    let myt = document.createTextNode([n]);

    Div.appendChild(child);
    child.appendChild(span);
    span.appendChild(mytext);
    span.before(myt);
    
    Div.className = "content";
    child.className = "product";
    Div.style.cssText= "display:flex; padding: 20px; min-height: calc(100vh - 142px); flex-wrap: wrap; justify-content: center; gap: 20px; box-sizing:border-box;";

    child.style.cssText= "padding: 20px; background-color: rgb(255, 255, 255); border: 1px sold rgb(221, 221, 221); width:calc((100% - 40px) /3) ; box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
 
    span.style.cssText= "font-size: 20px; color: black; font-weight: normal; display: block; margin-bottom: 10px;";
   
    document.body.appendChild(Div);
};

let footer =document.createElement("footer");
let footext = document.createTextNode("Copyright 2022");

footer.className = "footer";
footer.appendChild(footext);

footer.style.cssText= "text-align: center; font-size: 26px; padding:20px; color: rgb(255, 255, 255); background-color: rgb(25, 169, 110);";

document.body.appendChild(footer);

console.log(myBody);
//////