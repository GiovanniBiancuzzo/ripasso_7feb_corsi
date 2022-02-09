//Pagina con un form con queste caratteristiche:
//a. INTESTAZIONE FORM: una dicitura (es. 'corso creato da'...) con il nome dell'utente (localStorage getItem)
//b. input in cui inserire il nome del corso (obbligatorio)
//c. input dove inserire la durata del corso (obbligatorio)
//d. TRE combo con un elenco di materie, da cui scegliere le tre materie che saranno oggetto del corso, 
//         ALMENO UNA OBBLIGATORIA (controllo) (facoltativo: controllo su scelte diverse tra i tre combo)
//e. button di convalida del corso creato
//Al superamento dei controlli, dopo il click al di sotto del form compare il corso appena creato

class Corso {
    codice;//proprietà della classe
    titolo;
    durata;
    argomenti;
    constructor(_codice, _titolo, _durata, _argomenti) {
        this.codice = _codice;//valori che arrivano al costruttore all'istanziazione
        this.titolo = _titolo;
        this.durata = _durata;
        this.argomenti = _argomenti;
    }

    corsoCompleto() {
        return `"${this.titolo}"(${this.codice}) della durata di ${this.durata} mesi.
        Gli argomenti trattati saranno: ${this.argomenti}.`;
    }
}

$(() => {//logout
    let email = localStorage.getItem('email');//prendo l'email dal local storage
    let index = email.indexOf('@');//seleziono l'indice della chiocciola e
    let utente = email.slice(0, index);//rimuovo la parte finale dell'email '@blabla.com'
    $('header>button').text(email);// email in alto a destra al posto del login
    $('#benvenuto').text('Benvenuto ' + utente);

    $('#convalida').on('click', function () {
        const nomeCorso = $('#nomeCorso').val();
        const durataCorso = $('#durataCorso').val();
        const materia1 = $('#materia1').val();
        const materia2 = $('#materia2').val();
        const materia3 = $('#materia3').val();
        let convalida = true;

        if (nomeCorso == '') {//validazione nome corso
            $('#nomeCorso').next().text('Inserisci un nome per il corso').css('color', 'red');
            convalida = false;
        }
        else {
            $('#nomeCorso').next().text('');
        }
        $('#nomeCorso').val(nomeCorso);


        if (durataCorso <= 0) {//validazione durata corso
            $('#durataCorso').next().text('Inserisci un numero di mesi per il corso').css('color', 'red');
            convalida = false;
        }
        else {
            $('#durataCorso').next().text('');
        }
        $('#durataCorso').val(durataCorso);



        if (materia1 == '') {//validazione prima materia
            $('#materia1').next().text('Inserisci la prima materia').css('color', 'red');
            convalida = false;
        }
        else {
            $('#materia1').next().text('');
        }
        $('#materia1').val(materia1);

        if (materia2 == '') {//validazione seconda materia
            $('#materia2').next().text('Inserisci la seconda materia').css('color', 'red');
            convalida = false;
        }
        else {
            $('#materia2').next().text('');
        }
        $('#materia2').val(materia2);

        if (materia3 == '') {//validazione terza materia
            $('#materia3').next().text('Inserisci la terza materia').css('color', 'red');
            convalida = false;
        }
        else {
            $('#materia3').next().text('');
        }
        $('#materia3').val(materia3);

        if (convalida == true) {
            let sigla = (nomeCorso.slice(0, 1)) + nomeCorso.slice(nomeCorso.length - 1, nomeCorso.length) //creazione sigla a partire dal nome del corso, prima e ultima lettera del nome del corso
            sigla = sigla.toUpperCase();//sigla resa maiuscola
/*inutile?*/let corso = new Corso(sigla, nomeCorso, durataCorso, `${materia1}, ${materia2}, ${materia3}`); //istanziazione della classe Corso con  i valori appena inseriti 

            $('#nuovoCorso').html(`Hai creato un corso ${corso.corsoCompleto()}<br>`);//stampa attraverso il metodo corsoCompleto del corso appena creato

            localStorage.setItem('codiceCorso', sigla);
            localStorage.setItem('nomeCorso', nomeCorso);//riesco a salvarli nel localstorage, vorrei scriverli nell'elenco corsi
            localStorage.setItem('durataCorso', durataCorso);
            localStorage.setItem('materia1', materia1);
            localStorage.setItem('materia2', materia2);
            localStorage.setItem('materia3', materia3);
            $('#nuovoCorso').append('<br><span>Per visualizzare il corso appena creato insieme agli altri corsi <a href="corsi.html">Clicca qui</a></span>');
        }
    })


    $('#logout').on('click', function () {//pulsante logout che pulisce lo storage e riporta al login
        localStorage.clear();
        location.href = 'login.html';
    })
})
