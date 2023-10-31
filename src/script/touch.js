export default (function () {
    if (!window.location.pathname.includes("touch.html")) return

    const DIV = document.querySelector(".touchDiv")
    
    DIV.addEventListener("touchstart", touchHandler)
    DIV.addEventListener("touchend", touchHandler)
    
    let x
    let y
    
    function touchHandler(event) {
        const TOUCH__EVENT = event.changedTouches[0]
        
        if (event.type === "touchstart") {
            x = TOUCH__EVENT.clientX
            y = TOUCH__EVENT.clientY
        }
        else if (event.type === "touchend") {
            const OUTPUT = document.querySelector(".output")
            OUTPUT.innerText = x < TOUCH__EVENT.clientX ? "højre" : "venstre"
            OUTPUT.innerText = y < TOUCH__EVENT.clientY ? OUTPUT.innerText + " ned" : OUTPUT.innerText + " op" 
        }
    }
})()