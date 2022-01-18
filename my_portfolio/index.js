// console.log("SAVINDR")

document.querySelector(".cross").style.display = "none";
document.querySelector(".hamContainer").addEventListener("click", () =>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".hamburger").style.display = "inline"
        document.querySelector(".cross").style.display = "none"
    }
    else{
        document.querySelector(".hamburger").style.display = "none"
        // document.querySelector(".cross").style.display = "inline"
        setTimeout(() => {
            document.querySelector(".cross").style.display = "inline"
        }, 300)
    }
} )
