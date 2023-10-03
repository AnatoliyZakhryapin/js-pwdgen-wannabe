// - Richiesta il nome utente
//     - dichiarare una variabile
        let userName; 
//     - assegnare alla variabile il valore restituito da un prompt
        userName = prompt ("Ciao, come ti chiami?");
        console.log(userName);

// - Richiesta il cognome
//     - dichiarare una variabile
        let userSurname;
//     - assegnare alla variabile il valore restituito da un prompt
        userSurname = prompt ("Qual'è il tuo cognome?");
        console.log(userSurname);
// - Richiesta il colore preferito
//     - dichiarare una variabile
        let userColore; 
//     - assegnare alla variabile il valore restituito da un prompt
        userColore = prompt ("Qual'è il tuo colore preferito?")
        console.log(userColore);
// - Assegnazione password 
//     - dichiarare una variabile (parte numerico del password)
        let lastNumberPassword = 21;
//     - dichiarare una variabile del password
        let userPassword = userName + userSurname + userColore + lastNumberPassword;
                console.log(userPassword);
// - Invio password al utente