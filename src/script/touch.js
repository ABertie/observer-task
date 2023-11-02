export default (function () {
    if (!window.location.pathname.includes("touch.html")) return

    const DIV = document.querySelector(".touchDiv")
    
    DIV.addEventListener("touchstart", touchHandler)
    DIV.addEventListener("touchend", touchHandler)
    
    let x
    
    function touchHandler(event) {
        const TOUCH__EVENT = event.changedTouches[0].clientX
        
        if (event.type === "touchstart") {
            x = TOUCH__EVENT
        }
        else if (event.type === "touchend") {

            let Direction
            const TOLERANCE = 50

            if (x + TOLERANCE < TOUCH__EVENT) Direction = "Right"
            else if (x - TOLERANCE > TOUCH__EVENT) Direction = "Left"

            if(Direction) {
                DIV.lastElementChild.addEventListener("animationstart", function() {
                    DIV.removeEventListener("touchstart", touchHandler)
                    DIV.removeEventListener("touchend", touchHandler)
                })
                DIV.lastElementChild.addEventListener("animationend", function() {
                    DIV.removeChild(DIV.lastElementChild)
                    DIV.addEventListener("touchstart", touchHandler)
                    DIV.addEventListener("touchend", touchHandler)
                })

                DIV.lastElementChild.style.animation = `move${Direction} 1s ease`
                Direction = null
            }

            x = null
        }
    }
})()