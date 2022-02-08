//Messaggio di benvenuto all'utente loggato (comparirà la email inserita come user). (localStorage getItem)
//Mostrare TRE esempi di corso da creare utilizzando una classe (es. creare la classe corretta per illustrare il nostro corso) con il rispettivo programma didattico (5 punti al massimo).

class Corso {
    nome;//proprietà della classe
    titolo;
    durata;
    argomenti;
    constructor(_nome, _titolo, _durata,_argomenti) {
        this.nome = _nome;//valori che arrivano al costruttore all'istanziazione
        this.titolo = _titolo;
        this.durata = _durata;
        this.argomenti=_argomenti;
    }

    corsoCompleto() {
        return `Hai creato un corso "${this.titolo}"(${this.nome}) della durata di ${this.durata} mesi.
        Gli argomenti trattati saranno: ${this.argomenti}`;
    }
}

$(() => {
    let email = localStorage.getItem('email');//prendo l'email dal local storage
    let index = email.indexOf('@');//seleziono l'indice della chiocciola e
    let utente = email.slice(0,index);//rimuovo la parte finale dell'email '@blabla.com'
    $('header>button').text(email);// email in alto a destra al posto del login
    $('#benvenuto').text('Benvenuto ' + utente);



//avevo l'intenzione di scrivere qui i nuovi corsi aggiunti dal crea.js, i valori vengono salvati nel localstorage semplicemente ancora non sono arrivato alla parte dell'inserimento di questi



    $('#logout').on('click', function() {//pulsante logout che pulisce lo storage e riporta al login
        localStorage.clear();
        location.href = 'login.html';
    })

    var corso1 = new Corso ('FE07', 'Front-end Development', '4','HTML, CSS, JS');//istanziazione corsi di esempio
    var corso2 = new Corso ('BC02', 'Ballo Caraibico', '3','Movimenti del bacino, Movimenti degli arti');
    var corso3 = new Corso ('CE04', 'Cucina Esotica', '4','Uso delle spezie, Uso della frutta esotica');

    //stampa dei corsi di esempio
    $('#corsiBody').append(`<tr> <td>${corso1.nome}</td> <td>${corso1.titolo}</td> <td>${corso1.durata}</td> <td>${corso1.argomenti}</td> </tr>`);
    $('#corsiBody').append(`<tr> <td>${corso2.nome}</td> <td>${corso2.titolo}</td> <td>${corso2.durata}</td> <td>${corso2.argomenti}</td> </tr>`);
    $('#corsiBody').append(`<tr> <td>${corso3.nome}</td> <td>${corso3.titolo}</td> <td>${corso3.durata}</td> <td>${corso3.argomenti}</td> </tr>`);

})
