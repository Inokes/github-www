const container = document.getElementById('repos');

const gridbtn = document.getElementById('gridbtn');
const listbtn = document.getElementById('listbtn');

let repos = [];

async function loadrepos() {
  const res = await fetch('https://api.github.com/users/Inokes/repos');

  repos = await res.json();

  render();
}

function render() {
  container.innerHTML = '';

  repos.forEach((r) => {
    const el = document.createElement('div');

    el.className = 'repo';

    el.innerHTML = `
<h3>${r.name}</h3>
<p>${r.description || 'no description'}</p>
<a href="${r.html_url}" target="_blank">open repository</a>
`;

    container.appendChild(el);
  });
}

gridbtn.onclick = () => {
  container.className = 'repo-grid';
};

listbtn.onclick = () => {
  container.className = 'repo-list';
};

loadrepos();
