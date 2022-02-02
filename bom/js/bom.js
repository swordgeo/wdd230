const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
  if (input.value == '') {}
  else {
    const item = document.createElement('li');
    const delBtn = document.createElement('button');
    item.textContent = input.value;
    delBtn.innerHTML = '&#10060';
    list.appendChild(item);
    item.appendChild(delBtn);

    delBtn.addEventListener('click', function() {
      list.removeChild(item);
      list.removeChild(delBtn);
    });
    input.value = '';
    input.focus();

  }
});
