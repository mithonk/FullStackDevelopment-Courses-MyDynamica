document.getElementById('view').addEventListener('click', view);

function view() {
  let id = document.getElementById('id').value;

  document.getElementById('idView').innerText = id;
}
