console.log('Vue', Vue); // Verifica Vue

/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 *
 *  Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
    el: '#app',

    data: {
        myClasses:'title',
        title: 'Welcome Vue', 
        image: 'https://cdn.pixabay.com/photo/2016/03/22/15/47/board-1273128_1280.jpg',
    }
});
    
    
    

    


