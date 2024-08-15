const image = document.getElementById("img")
const qrinp = document.getElementById("inp")
const qrbtn = document.getElementById("button")

qrbtn.addEventListener("click",()=>{
    const inputvalue = qrinp.value
    console.log(inputvalue)
    if(!inputvalue){
        alert("please enter yout input")
        return;
    }else{
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
        image.alt = `QR CODE FOR ${inputvalue}`
    }
})
