document.addEventListener("click",imp)
document.addEventListener("keydown",imp2)
var exprestion=[]
var num = ""
function imp(event){
 if (event.target.className=="hiii"){
  if (["0","1","2","3","4","5","6","7","8","9"].includes(event.target.id[1])){
    num=num+event.target.id[1]

 }
 else if(event.target.id[1]=="d"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("/")
    num=""
    }

 }
 else if(event.target.id[1]=="x"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("*")
    num=""
    }
 }
 else if(event.target.id[1]=="-"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("-")
    num=""
    }

 }
 else if(event.target.id[1]=="+"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("+")
    num=""
    }
 }
 else if(event.target.id[1]=="e"){
    if (exprestion.length!=0 && num!=""){

    exprestion.push(parseFloat(num))
    num=""
    runexpression()
    }
    
 }
 else if(event.target.id[1]=="a"){
    
    exprestion=[]
    num=""
    
    
 }   
 console.log(exprestion)
 document.querySelector("#hi").textContent=exprestion.join("")+num
 }
}
function runexpression(){
    x=exprestion.length
    for (let i = 0; i<x;i++){
        if (exprestion[i]=="/"){
            exprestion[i]=exprestion[i-1]/exprestion[i+1]
            exprestion.splice(i-1, 1);
            exprestion.splice(i, 1); 
            x=x-2
            i=i-2
        }
    }
    for (let i = 0; i<x;i++){
        if (exprestion[i]=="*"){
            exprestion[i]=exprestion[i-1]*exprestion[i+1]
            exprestion.splice(i-1, 1);
            exprestion.splice(i, 1); 
            x=x-2
            i=i-2
        }
    }
    for (let i = 0; i<x;i++){
        if (exprestion[i]=="-"){
            exprestion[i]=exprestion[i-1]-exprestion[i+1]
            exprestion.splice(i-1, 1);
            exprestion.splice(i, 1); 
            x=x-2
            i=i-2
        }
    }
    for (let i = 0; i<x;i++){
        if (exprestion[i]=="+"){
            exprestion[i]=exprestion[i-1]+exprestion[i+1]
            exprestion.splice(i-1, 1);
            exprestion.splice(i, 1); 
            x=x-2 
            i=i-2
        }
    }
    document.querySelector("#hi").textContent=exprestion.join("")
    num=exprestion.join("")
    exprestion=[]

}

function imp2(event){
 
  if (["0","1","2","3","4","5","6","7","8","9"].includes(event.key)){
    num=num+event.key

 }
 else if(event.key=="/"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("/")
    num=""
    }

 }
 else if(event.key=="*"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("*")
    num=""
    }
 }
 else if(event.key=="-"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("-")
    num=""
    }

 }
 else if(event.key=="+"){
    if (num!=""){
    exprestion.push(parseFloat(num))
    exprestion.push("+")
    num=""
    }
 }
 else if(event.key=="=" || event.key=="Enter"){
    if (exprestion.length!=0 && num!=""){

    exprestion.push(parseFloat(num))
    num=""
    runexpression()
    }
    
 }
 else if(event.key=="c" || event.key=="Backspace"){
    
    exprestion=[]
    num=""
    
    
 }   
 console.log(exprestion)
 document.querySelector("#hi").textContent=exprestion.join("")+num
 }
