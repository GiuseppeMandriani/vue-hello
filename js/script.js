console.log('Vue', Vue); // Verifica Vue

/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 *
 *  Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
    el: '#app',

    data: {
        class1:'title',
        class2:'upper',
        class3:'card',
        title: 'Welcome Vue', 
        image: 'https://cdn.pixabay.com/photo/2016/03/22/15/47/board-1273128_1280.jpg',
        titleInterface:'',
        image2:'https://picsum.photos/100',
        nome:'',
        cognome:'',
        userName:'',

    },

    methods: {
        sayHi(){
            this.title = `Welcome ${this.nome}`; 
            console.log(`Welcome ${this.nome}`);
        },
        changeColor(){
            //A
            // if(this.class3 === 'card'){
            //     this.class3 = 'change'
            // } else {
            //     this.class3 = 'card';
            // }

            // B OPERATORE TERNARIO

            /**
             * classe di riferimento = condizione true ?(true o false) cambio : (else) 'cambio'
             */

            this.class3 = (this.class3 === 'card') ? 'change' : 'card';
        }
    }
});
    
    
    

    


