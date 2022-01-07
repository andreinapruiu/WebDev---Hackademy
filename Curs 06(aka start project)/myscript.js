function items()
{
	var itemsLeft = document.getElementsByClassName('tasks').length

	var checkboxes = document.getElementsByClassName("buton checkbox")

	var itemsLeftcopy = itemsLeft

	for (let i = 0; i < itemsLeft; i++)
		if (checkboxes[i].checked == true)
			itemsLeftcopy--;

	itemsLeft = itemsLeftcopy

	if (itemsLeft == 0) {
		var nr = document.getElementsByClassName('tasks').length

		if (nr == 0) {
			var footer = document.getElementsByClassName('incercare')

			footer[0].style.display = 'none'
		}

		document.getElementsByClassName('items')[0].innerHTML = itemsLeft + ' itemi ramasi'
	} else {
		var footer = document.getElementsByClassName('incercare')

		footer[0].style.display = ""
		if (itemsLeft == 1)
			document.getElementsByClassName('items')[0].innerHTML = '1 item ramas'
		document.getElementsByClassName('items')[0].innerHTML = itemsLeft + ' itemi ramasi'
	}
}

items()

function change(nr)
{
	var btns = document.getElementsByClassName("special")
	var activeButton = document.getElementsByClassName("special active")

	activeButton[0].classList.remove('active')
	btns[nr-1].classList.add('active')
}

function deleteTask(id)
{
	var bye = document.getElementById(id)

	bye.remove()

	items()
}

function delete_checked()
{
	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	for (let i = 0; i < nr; i++) {
		if (checkboxes[i].checked == true) {
			deleteTask(checkboxes[i].parentNode.id)
			i--
		}
	}
}

function check()
{
	var tasks = document.getElementsByClassName("tasks");

	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	if (checkboxes[0].checked == false) {
		for (let i = 0; i < nr; i++) {
			checkboxes[i].checked = true;
			tasks[i].classList.add("completat");
		}
	} else {
		for (let i = 0; i < nr; i++) {
			checkboxes[i].checked = false;
			tasks[i].classList.remove("completat");
		}
	}

	items()
}

function show_all()
{
	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	for (let i = 0; i < nr; i++) {
		document.getElementById(checkboxes[i].parentNode.id).style.display = "";
	}
}

function show_active()
{
	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	show_all()

	for (let i = 0; i < nr; i++) {
		if (checkboxes[i].checked == true)
			document.getElementById(checkboxes[i].parentNode.id).style.display = "none";
	}
}

function show_complete()
{
	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	show_all()

	for (let i = 0; i < nr; i++) {
		if (checkboxes[i].checked == false)
			document.getElementById(checkboxes[i].parentNode.id).style.display = "none";
	}
}

function one_check()
{
	var tasks = document.getElementsByClassName("tasks");

	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	var special = document.getElementsByClassName("special")

	for (let i = 0; i < nr; i++) {
		if (checkboxes[i].checked == true) {
			if (special[1].classList.contains("active") == true) {
				show_active()
			}

			tasks[i].classList.add("completat");
		} else {
			if (special[2].classList.contains("active") == true) {
				show_complete()
			}

			tasks[i].classList.remove("completat");
		}
	}

	items()
}

// function change_task(id)
// {
// 	var current = document.getElementById(id)
// 	current.innerHTML = '<textarea class="form-control" id="newcont">'+current.innerText+'</textarea>'
// 	var newcont = document.getElementById("newcont")

// 	newcont.focus(function() {
// 		console.log('in');
// 	}).blur(function() {
// 		var newcont1 = newcont.val()
// 		current.innerHTML = newcont1
// 	})
// }

function addTask(text)
{
	var div = document.createElement("div")
	var nr = document.getElementsByClassName("tasks").length
	nr++
	var id = "id" + nr

	div.setAttribute("id", id)

	var input = document.createElement("input")
	input.setAttribute("class", "buton checkbox")
	input.setAttribute("type", "checkbox")
	input.setAttribute("onchange", "one_check()")

	div.appendChild(input)

	var p = document.createElement("p")
	var txt = "text" + nr
	p.setAttribute("id", txt)
	p.setAttribute("class", "tasks")
	p.setAttribute("ondblclick", "change_task('"+txt+"')")
	p.innerHTML = text

	div.appendChild(p)

	var i = document.createElement("i")
	i.setAttribute("class", "fa fa-times custom2")
	i.setAttribute("aria-hidden", "true")
	i.setAttribute("onclick", "deleteTask('"+id+"')")

	div.appendChild(i)

	document.getElementById("justtasks").appendChild(div)

	items()

	var special = document.getElementsByClassName("special")

	if (special[1].classList.contains("active") == true) {
		show_active()
	}

	if (special[2].classList.contains("active") == true) {
		show_complete()
	}
}

document.getElementById("inputthing").onkeydown = function(event) {
	if (event.keyCode == 13) {
		text = document.getElementById("inputthing").value
		if (text != "") {
			document.getElementById("inputthing").value = ""
			addTask(text)
		}
	}
}