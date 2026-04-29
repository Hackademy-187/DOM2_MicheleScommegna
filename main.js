let libreria = {
  collComics: [
    { titolo: 'Bat-Man', autore: 'Bob Kane', anno: 1946 },
    { titolo: 'Spider-Man', autore: 'Stan Lee', anno: 1962 },
    { titolo: 'Ghost Rider', autore: 'Roy Thomas', anno: 1972 },
    { titolo: 'Blade', autore: 'Marv Wolfman', anno: 1973 }
  ]
};

let tableBody = document.querySelector('#tableBody');
let cntShell = document.querySelector('#cntShell');
let isClicked = true;

/* ===== AGGIORNA TABELLA ===== */
function aggTab() {
  tableBody.innerHTML = '';

  libreria.collComics.forEach((fumetto, index) => {
    let row = document.createElement('tr');

    // celle
    let tdTitolo = document.createElement('td');
    tdTitolo.textContent = fumetto.titolo;

    let tdAutore = document.createElement('td');
    tdAutore.textContent = fumetto.autore;

    let tdAnno = document.createElement('td');
    tdAnno.textContent = fumetto.anno;

    let tdAzioni = document.createElement('td');

    // bottone modifica
    let btnModifica = document.createElement('button');
    btnModifica.className = 'btn btn-warning btn-sm me-1';
    btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>';

    btnModifica.addEventListener('click', () => {
      modifica(index);
    });

    // bottone elimina
    let btnElimina = document.createElement('button');
    btnElimina.className = 'btn btn-danger btn-sm';
    btnElimina.innerHTML = '<i class="bi bi-x"></i>';

    btnElimina.addEventListener('click', () => {
      elimina(index);
    });

    tdAzioni.appendChild(btnModifica);
    tdAzioni.appendChild(btnElimina);

    row.appendChild(tdTitolo);
    row.appendChild(tdAutore);
    row.appendChild(tdAnno);
    row.appendChild(tdAzioni);

    tableBody.appendChild(row);
  });
}

aggTab();

/* ===== ELIMINA ===== */
function elimina(index) {
  libreria.collComics.splice(index, 1);
  aggTab();
}

/* ===== MODIFICA ===== */
function modifica(index) {
  let nuovoTitolo = prompt("Nuovo titolo:", libreria.collComics[index].titolo);
  let nuovoAutore = prompt("Nuovo autore:", libreria.collComics[index].autore);
  let nuovoAnno = prompt("Nuovo anno:", libreria.collComics[index].anno);

  if (nuovoTitolo) libreria.collComics[index].titolo = nuovoTitolo;
  if (nuovoAutore) libreria.collComics[index].autore = nuovoAutore;
  if (nuovoAnno) libreria.collComics[index].anno = nuovoAnno;

  aggTab();
}

/* ===== AGGIUNGI ===== */
document.querySelector('#addBtn').addEventListener('click', () => {
  let titolo = document.querySelector('#titolo').value;
  let autore = document.querySelector('#autore').value;
  let anno = document.querySelector('#anno').value;

  if (!titolo || !autore || !anno) return;

  libreria.collComics.push({ titolo, autore, anno });

  aggTab();
});

/* ===== MOSTRA/NASCONDI ===== */
document.querySelector('#toggleBtn').addEventListener('click', () => {
  cntShell.classList.toggle('d-none');

  let btn = document.querySelector('#toggleBtn');

  if (isClicked) {
    btn.innerHTML = `<i class="bi bi-toggle-off"></i> Mostra`;
    isClicked = false;
  } else {
    btn.innerHTML = `<i class="bi bi-toggle-on"></i> Nascondi`;
    isClicked = true;
  }
});