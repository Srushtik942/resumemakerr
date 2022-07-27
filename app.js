//alert("loading");

function addnewwefield(){
    // console.log("Adding new field");



    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");



    weOb.insertBefore(newNode, weAddButtonOb);


}

function addnewaqfield(){


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");



    aqOb.insertBefore(newNode, aqAddButtonOb);



}


function Addcefield(){


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let ceOb = document.getElementById("ce");
    let ceAddButtonOb = document.getElementById("ceAddButton");



    ceOb.insertBefore(newNode, ceAddButtonOb);


}

//it takes values from users

function generateCV(){

    // console.log("Generating cv");
// for changing name
    let namefield=document.getElementById('namefield').value;

    let namet1=document.getElementById('namet1');

    namet1.innerHTML =namefield;


    let namet2=document.getElementById('namet2');

    namet2.innerHTML = namefield;

    // for changing number

    let number=document.getElementById('number').value;

    let contatctt=document.getElementById('contactt');
    contatctt.innerHTML=number;


    //for changing address

    let addressfield=document.getElementById('addressfield').value;

    let addressT=document.getElementById('addressT');
    addressT.innerHTML=addressfield;


    //for chaning links

    document.getElementById("LiT").innerHTML=document.getElementById("lnfield").value;

    document.getElementById("ghT").innerHTML=document.getElementById("ghfield").value;

    document.getElementById("IGT").innerHTML=document.getElementById("igfield").value;




    //objectives

    document.getElementById('edut').innerHTML=document.getElementById("skillfield").value;



    //we

    let wes= document.getElementsByClassName('weField');

    let str='';

    for(let e of wes){

        str=str+`<li> ${e.value}</li>`;
    }

    document.getElementById("wet").innerHTML=str;


//academic qualification
    let ac=document.getElementsByClassName('aqField');

    let str1='';
    for(e of ac){

        str1=str1+`<li>${e.value}</li>`;
    }

    document.getElementById("aqt").innerHTML=str1;


// //projects

let pr =document.getElementsByClassName('ceField');

let str2='';
for(e of pr){

    str2=str2+`<li>${e.value}</li>`;
}
document.getElementById("pt").innerHTML=str2;



    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display="block";


}

//print cv

function printCV(){

    window.print();


 }