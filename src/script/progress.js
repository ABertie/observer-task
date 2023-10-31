export default (function () {
    if (!window.location.pathname.includes("artikel.html")) return //guard clause

    const OBSERVER = new IntersectionObserver(callback, {threshold: 0.01})

    const ARTIKEL = document.querySelector(".artikel")

    OBSERVER.observe(ARTIKEL)

    function callback(entries) {
        const [ENTRY] = entries
        
        if (!ENTRY.isIntersecting) return

        if (ENTRY.isIntersecting) {

            window.addEventListener("scroll", function() {
                const ENTRY_HEIGT = ENTRY.target.clientHeight
                const ENTRY_DISTANCE_FROM_TOP = ENTRY.target.offsetTop
                const SCEEN_HEIGHT = window.innerHeight
                const SCORLL_FROM_TOP = window.scrollY

                const PROGRESS = (SCORLL_FROM_TOP + SCEEN_HEIGHT - ENTRY_DISTANCE_FROM_TOP) / ENTRY_HEIGT * 100

                const PROGRESS_BAR = document.querySelector("progress")
                PROGRESS_BAR.value = PROGRESS
            })

           
        }
    }
})()