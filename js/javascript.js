// - Richiesta il nome utente
//     - dichiarare una variabile
        let userName; 
//     - assegnare alla variabile il valore restituito da un prompt
        userName = prompt ("Ciao, come ti chiami?");
        userName = userName.replace(/\s/g, '');
        console.log(userName);

// - Richiesta il cognome
//     - dichiarare una variabile
        let userSurname;
//     - assegnare alla variabile il valore restituito da un prompt
        userSurname = prompt ("Qual'è il tuo cognome?");
        userSurname = userSurname.replace(/\s/g, '');
        console.log(userSurname);
// - Richiesta il colore preferito
//     - dichiarare una variabile
        let userColore; 
//     - assegnare alla variabile il valore restituito da un prompt
        userColore = prompt ("Qual'è il tuo colore preferito?");
        userColore = userColore.replace(/\s/g, '');
        console.log(userColore);
// - Assegnazione password 
//     - dichiarare una variabile (parte numerico del password)
        let lastNumberPassword = Math.floor(Math.random(10) * 99) + 1;
//     - dichiarare una variabile del password
        let userPassword = userName + userSurname + userColore + lastNumberPassword;
                console.log(userPassword);
// - Invio password al utente 
//     - recuperare con js l'elemento del dom con id= "userPassword"
        const messageDomElement = document.getElementById("userPassword");
        console.dir(messageDomElement);
//     - modificare l'innerHTML del elemento "userPassword" con il valore della variabile userPassword
        messageDomElement.innerHTML = userPassword;