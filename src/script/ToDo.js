import printList from "./printList"
import saveJSONtoLocalStorage from "./saveJSONtoLocalStorage"

export default (function() {
    if (!window.location.pathname.includes("index.html")) return // guard clause

    const TODO_FORM = document.querySelector(".todoForm")

    TODO_FORM.addEventListener("submit", submitHandler)

    function submitHandler(event) {
        event.preventDefault()

        saveJSONtoLocalStorage("todo-items",
			{ name: event.target.item.value, done: false })
		printList()

        event.target.item.value = ""
    }

    printList()

    const CLEAT_LIST_BUTTON = document.querySelector(".clearListButton")
    CLEAT_LIST_BUTTON.addEventListener("click", function() {
        if (confirm("Er du sikker på du vil slette din liste")) {
            localStorage.setItem("todo-items", [])
            printList()
        }
    })

})()