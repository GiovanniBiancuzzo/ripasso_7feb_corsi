$(() => {//logout
    let email = localStorage.getItem('email');//prendo l'email dal local storage
    let index = email.indexOf('@');//seleziono l'indice della chiocciola e
    let utente = email.slice(0,index);//rimuovo la parte finale dell'email '@blabla.com'
    $('header>button').text(email);// email in alto a destra al posto del login
    $('#benvenuto').text('Benvenuto ' + utente);







    
    $('#logout').on('click', function() {
        localStorage.clear();
        location.href = 'login.html';
    })
})