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
	const item = document.getElementById('userinput').value;
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var button = document.createElement('button');
	var i = document.createElement('i');

	i.classList.add('deleteBtn');
	i.classList.add('material-icons');
	td1.classList.add('listItem');

	td1.appendChild(document.createTextNode(item));
	i.appendChild(document.createTextNode('delete'));
	button.appendChild(i);
	td2.appendChild(button);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tbodyEl.appendChild(tr);

	input.value='';

}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

tableEl.addEventListener("click", deleteOrToggleListElement);








