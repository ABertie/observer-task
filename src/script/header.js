export default (function() {
    if (!window.location.pathname.includes("artikel.html")) return // guard clause
    
    const HEADER = document.querySelector("header")

    const OBSERVER = new IntersectionObserver(callback, {
		threshold: 0.01
	})
    
	OBSERVER.observe(document.querySelector("body"))
    
    function callback(entries) {
        const [ENTRY] = entries
        
        if (!ENTRY.isIntersecting) return
        
        if (ENTRY.isIntersecting) {
            let SCROLL
            window.addEventListener("scroll", function() {
                if (window.scrollY > SCROLL) {
                    HEADER.style.top = "-100%"
                    SCROLL = window.scrollY
                }
                else {
                    HEADER.style.top = "0"
                    SCROLL = window.scrollY
                }



            })
        }
    }
})()