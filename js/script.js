const lists = document.querySelectorAll('.list');
const button = document.querySelector('.button');

function addTask() {
	const btn = document.querySelector('.add_btn');
	const addBtn = document.querySelector('.add_item-btn');
	const cancelBtn = document.querySelector('.cancel_item-btn');
	const textArea = document.querySelector('.textarea');
	const form = document.querySelector('.form');

	let value;

	btn.addEventListener('click', () => {
		form.style.display = 'block';
		btn.style.display = 'none';
		addBtn.style.display = 'none';

		textArea.addEventListener('input', e => {
			value = e.target.value;

			if (value) {
				addBtn.style.display = 'block';
			} else {
				addBtn.style.display = 'none';
			}
		})
	})

	cancelBtn.addEventListener('click', () => {
		textArea.value = '';
		value = '';
		form.style.display = 'none';
		btn.style.display = 'block';
	})

	addBtn.addEventListener('click', () => {
		const newItem = document.createElement('div');
		newItem.classList.add('list_item');
		newItem.draggable = true;
		newItem.textContent = value;
		lists[0].append(newItem);
		textArea.value = '';
		value = '';
		form.style.display = 'none';
		btn.style.display = 'block';
	})

}
addTask()

function addBoard() {
	const boards = document.querySelector('.boards');
	const board = document.createElement('div');
	board.classList.add('boards_item');
	board.innerHTML = `
	<span contenteditable="true" class="title">Введите название</span>
	<div class="list"></div>
	`
	boards.append(board);

	changeTitle()
}
button.addEventListener('click', addBoard);

function changeTitle() {
	const titles = document.querySelectorAll('.title');

	titles.forEach((title) => {
		title.addEventListener('click', e => {
			e.target.textContent = ''
		})
	})

}
changeTitle()