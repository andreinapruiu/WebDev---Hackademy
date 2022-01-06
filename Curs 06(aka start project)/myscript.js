function items()
{
	var itemsLeft = document.getElementsByClassName('tasks').length

	if (itemsLeft == 0) {
		var footer = document.getElementsByClassName('incercare')

		footer[0].style.display = 'none'
	} else {
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

function check()
{
	var checkboxes = document.getElementsByClassName("buton checkbox")

	var nr = document.getElementsByClassName("buton checkbox").length

	if (checkboxes[0].checked == false) {
		for (let i = 0; i < nr; i++) {
			checkboxes[i].checked = true;
		}
	} else {
		for (let i = 0; i < nr; i++) {
			checkboxes[i].checked = false;
		}
	}
}