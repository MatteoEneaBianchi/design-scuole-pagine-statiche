document.addEventListener("DOMContentLoaded", function() {
    // Funzione per caricare un file HTML esterno
    function loadHTML(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => {
                console.error('Errore nel caricamento del file:', error);
            });
    }

    // Carica il contenuto dell'intestazione e del piè di pagina
    loadHTML('header', '/includes/header.html');
    loadHTML('documenti', '/includes/documenti.html');
    loadHTML('evidenza', '/includes/evidenza.html');
    loadHTML('footer', '/includes/footer.html');
});
