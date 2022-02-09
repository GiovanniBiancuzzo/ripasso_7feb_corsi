//Messaggio di benvenuto all'utente loggato (comparirà la email inserita come user). (localStorage getItem)
//Mostrare TRE esempi di corso da creare utilizzando una classe (es. creare la classe corretta per illustrare il nostro corso) con il rispettivo programma didattico (5 punti al massimo).

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
        Gli argomenti trattati saranno: ${this.argomenti}`;
    }
}

$(() => {
    let email = localStorage.getItem('email');//prendo l'email dal local storage
    let index = email.indexOf('@');//seleziono l'indice della chiocciola e
    let utente = email.slice(0, index);//rimuovo la parte finale dell'email '@blabla.com'
    $('header>button').text(email);// email in alto a destra al posto del login
    $('#benvenuto').text('Benvenuto ' + utente);

    let corso1 = new Corso('FE07', 'Front-end Development', '4', 'HTML, CSS, JS');//istanziazione corsi di esempio
    let corso2 = new Corso('BC02', 'Ballo Caraibico', '3', 'Movimenti del bacino, Movimenti degli arti');
    let corso3 = new Corso('CE04', 'Cucina Esotica', '4', 'Uso delle spezie, Uso della frutta esotica');

    //stampa dei corsi di esempio
    $('#corsiBody').append(`<tr> <td>${corso1.codice}</td> <td>${corso1.titolo}</td> <td>${corso1.durata}</td> <td>${corso1.argomenti}</td> </tr>`);
    $('#corsiBody').append(`<tr> <td>${corso2.codice}</td> <td>${corso2.titolo}</td> <td>${corso2.durata}</td> <td>${corso2.argomenti}</td> </tr>`);
    $('#corsiBody').append(`<tr> <td>${corso3.codice}</td> <td>${corso3.titolo}</td> <td>${corso3.durata}</td> <td>${corso3.argomenti}</td> </tr>`);


    let codice = localStorage.getItem('codiceCorso');
    let titolo = localStorage.getItem('nomeCorso');//riesco a salvarli nel localstorage, vorrei scriverli nell'elenco corsi
    let durata = localStorage.getItem('durataCorso');
    let materia1 = localStorage.getItem('materia1');
    let materia2 = localStorage.getItem('materia2');
    let materia3 = localStorage.getItem('materia3');
    //istanziazione del corso aggiuntivo
    let corsoCreato = new Corso(codice, titolo, durata, `${materia1}, ${materia2}, ${materia3}`);
    //stampa del corso aggiuntivo
    $('#corsiBody').append(`e<tr> <td>${corsoCreato.codice}</td> <td>${corsoCreato.titolo}</td> <td>${corsoCreato.durata}</td> <td>${corsoCreato.argomenti}</td> </tr>`);



    $('#logout').on('click', function () {//pulsante logout che pulisce lo storage e riporta al login
        localStorage.clear();
        location.href = 'login.html';
    })

})