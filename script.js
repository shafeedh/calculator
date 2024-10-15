const displayContent=(content)=>{
    dis.value+=content
}
showResult=()=>{

   try{
    dis.value=eval(dis.value)
   }
   catch{
    dis.value=""
    dis.placeholder="invalid expression!!"
   }
}
displayclear=()=>{
    dis.value=""
    dis.placeholder="0"
}
remove=()=>{
    dis.value=dis.value.slice(0,-1)
}