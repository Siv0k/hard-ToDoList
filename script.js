const form = document.querySelector('form');
const input = document.querySelector('input');
const table = document.querySelector('table');

form.addEventListener('submit', e => {
  e.preventDefault();
  const newToDo = input.value;
  input.value = '';
  const row = document.createElement('tr');
  const cell1 = document.createElement('th');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  const cell4 = document.createElement('td');
  const finishBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  cell1.textContent = table.rows.length;
  cell2.textContent = newToDo;
  cell3.textContent = 'in progress';
  finishBtn.textContent = 'Finish';
  deleteBtn.textContent = 'Delete';
  finishBtn.classList.add('btn', 'finishBtn');
  deleteBtn.classList.add('btn', 'deleteBtn');
  cell4.appendChild(finishBtn);
  cell4.appendChild(deleteBtn);
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);
  table.appendChild(row);
});

table.addEventListener('click', e => {
  if (e.target.classList.contains('finishBtn')) {
    const row = e.target.parentElement.parentElement;
    row.cells[2].textContent = 'finished';
  } else if (e.target.classList.contains('deleteBtn')) {
    const row = e.target.parentElement.parentElement;
    table.deleteRow(row.rowIndex);
  }
});



