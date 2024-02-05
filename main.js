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
        emailGenerata: 'Giovanni',
        
      }
      
    },
    mounted(){
        
    },
    methods: {
        emailRandom(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (results) => {
                console.log(results.data.response)
                this.emailGenerata = results.data.response
            })
        },

    },
  }).mount('#app')