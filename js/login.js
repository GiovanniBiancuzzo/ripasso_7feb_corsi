//Form di login con user e password; la user DEVE essere una email valida (controllo), la password DEVE essere almeno di 6 //caratteri e contenere almeno un numero (controllo); a controlli superati, dopo il click parte una progress bar (o spin //bootstrap o altra idea di elemento di attesa) che dopo 5 secondi indirizza alla pagina dell'elenco corsi. (localStorage //setItem)

$(() => {
    localStorage.clear();
    // Inserisco il gestore per l'evento "click" del pulsante invia.
    $('#login').on('click', () => {
        // creo una variabile "convalida" per contenere la validità del campo.
        let convalida = true;

        // Uso la regular expression per validare l'inserimento dell'email.
        // Lo schema regex è /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
        const schemaEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        // Creo una variabile che mi contiene il contenuto del campo email.
        const email = $('#email').val().trim();
        // Devo verificare se il campo è vuoto e se l'indirizzo email è valido (uso regex).
        if (email == '') {
            $('#email').next().text('Questo campo è richiesto.');
            convalida = false;
        } else if (!schemaEmail.test(email)) {
            $('#email').next().text('Devi inserire un indirizzo email valido.');
            convalida = false;
        } else {
            $('#email').next().text('');
        }
        $('#email').val(email);

        // Ora passo al controllo della password salvando il contenuto inserito in una variabile.
        const password = $('#password').val().trim();
        let regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

        // La password è più corta di 6 caratteri?
        if (password.length < 6) {
            $('#password').next().text('Deve essere di almeno 8 caratteri.');
            convalida = false;
        } else if (!regex.test(password)) {
            $('#password').next().text('La password deve contenere almeno un numero e un carattere maiuscolo/minuscolo.');
            convalida = false;
        } else {
            $('#password').next().text('');
        }
        $('#password').val(password);

        if (convalida == true) {
            localStorage.setItem('email', email);
            caricamento();
        }
    });

    function caricamento() {
        let progressBar = $('#progress');
        let width = $('.card-body').width();//larghezza del contenitore del login da usare per la barra
        let larghezza = 1;
        let intervallo = setInterval(cresci, 10);
        function cresci() {
            if (larghezza > width) {
                clearInterval(intervallo);
                location.href = 'corsi.html';
            }
            else {
                larghezza++;
                progressBar.html(`<span>${Math.round(larghezza * 100/width)} %</span>`)
                progressBar.css('width', larghezza + 'px');
            }
        }
    }
});