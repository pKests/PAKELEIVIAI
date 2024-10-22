document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('saveBtn');

    // Funkcija, kuri išsaugo klientų duomenis į LocalStorage
    function saveClientData() {
        const clientData = {};

        // Loop through each day and save client names
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        days.forEach(day => {
            const clients = [
                document.getElementById(`${day}-client1`).value,
                document.getElementById(`${day}-client2`).value,
                document.getElementById(`${day}-client3`).value,
                document.getElementById(`${day}-client4`).value
            ];
            clientData[day] = clients;
        });

        // Išsaugoti duomenis į LocalStorage
        localStorage.setItem('clientData', JSON.stringify(clientData));
        alert('Duomenys išsaugoti!');
    }

    // Funkcija, kuri įkrauna klientų duomenis iš LocalStorage
    function loadClientData() {
        const storedClients = JSON.parse(localStorage.getItem('clientData'));
        if (storedClients) {
            const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            days.forEach(day => {
                const clients = storedClients[day];
                if (clients) {
                    clients.forEach((client, index) => {
                        if (client) {
                            document.getElementById(`${day}-client${index + 1}`).value = client;
                        }
                    });
                }
            });
        }
    }

    // Įkrauti duomenis kai puslapis yra užkrautas
    loadClientData();

    // Įvykis, kai paspaudžiamas išsaugojimo mygtukas
    saveBtn.addEventListener('click', saveClientData);
});
