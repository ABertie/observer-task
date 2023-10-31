import getJSONfromLocalStorage from "./getJSONfromLocalStorage"
import updateJSONinLocalStorage from "./updateJSONinlLocalStorage"
import deleteJSONfromLocalStaorage from "./deleteJSONfromLocalStorage"

function printList() {
	const DATA = getJSONfromLocalStorage("todo-items")
	const ITEMS = document.querySelector(".items")

    ITEMS.innerHTML = ""

	DATA.forEach(function (item, index) {
		const LI = document.createElement("li")
        const CHECKBOX = document.createElement("input")
        const DELETE_BUTTON = document.createElement("button")
        CHECKBOX.type = "checkbox"
        CHECKBOX.name = index
        DELETE_BUTTON.innerHTML = "x"
        DELETE_BUTTON.name = index
        CHECKBOX.checked = item.done
        LI.append(CHECKBOX, item.name, DELETE_BUTTON)
		ITEMS.append(LI)

        CHECKBOX.addEventListener("click", clickHandler)
        DELETE_BUTTON.addEventListener("click", deleteHandler)

        function clickHandler(event) {
            updateJSONinLocalStorage("todo-items", parseInt(event.target.name))
        }

        function deleteHandler(event) {
            if (confirm("Er du sikker på du vil slette dette element")) {
                deleteJSONfromLocalStaorage("todo-items", parseInt(event.target.name))
                printList()
            }
        }
	})
}

export default printList