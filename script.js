var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var tableEl = document.querySelector("table");
var tbodyEl = document.querySelector("tbody");

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function deleteOrToggleListElement(e) {
	console.log(e.target);
	if(e.target.classList.contains("deleteBtn")) {
		const btn = e.target;
		btn.closest("tr").remove();
	}
	else if(e.target.classList.contains("listItem")) {
		const btn = e.target;
		btn.classList.toggle("done");

	}
}

function createListElement() {
	const item = document.getElementById("userinput").value;
	tbodyEl.innerHTML += `
		<tr>
			<td class="listItem">${item}</td>
			<td>
				<button>
					<i class="deleteBtn material-icons">delete</i>
				</button>
				
			</td>
		</tr>
	`;
	input.value="";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

tableEl.addEventListener("click", deleteOrToggleListElement);








