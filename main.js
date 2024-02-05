// Descrizione:

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const { createApp } = Vue

  createApp({
    data() {
      return {

        // array vuoto per dove mettere le 10 mail generate con il ciclo
        emailGenerate: [],
        
      }
      
    },
    mounted(){
        
    },
    methods: {
        
        emailRandom(){

            // condizione che azzera la lista tutte le volte che schiacci il bottone
            if (this.emailGenerate.length !== 0) {

                this.emailGenerate = [];
            }

            // ciclo che gerera 10 mail casuali tramite api
            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( ( result ) => { 

                    let emailGenerata = result.data.response;

                    this.emailGenerate.push(emailGenerata);

                })
            }
            console.log(this.emailGenerate)
        },

    },
  }).mount('#app')

//   Terminato esercizio 
