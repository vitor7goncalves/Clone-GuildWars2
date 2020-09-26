var app = new Vue({
    el: "#app",
    data:{
       en: "EN",
       de: "DE",
       es: "ES",
       fr: "FR",
       engb: "EN-GB",
       selecDE: false,
       selecSE: false,
       selecFR: false,
       selecENGB: false,
      
    },
    methods: {
        langDE(){
            this.selecDE = true
            this.selecSE = false
            this.selecFR = false
            this.selecENGB = false
            if(this.selecDE === true) {
               this.en = this.de
            }
        },
        langES(){
            this.selecDE = false
            this.selecSE = true
            this.selecFR = false
            this.selecENGB = false
            if(this.selecSE === true) {
               this.en = this.es
            }
        },
        langFR(){
            this.selecSE = false
            this.selecDE = false
            this.selecFR = true
            this.selecEN_GB = false
            if(this.selecFR === true) {
               this.en = this.fr
            }
        },
        langENGB(){
            this.selecSE = false
            this.selecDE = false
            this.selecFR = false
            this.selecENGB = true
            if(this.selecENGB === true) {
               this.en = this.engb
            }
        },
        
        
    },
   
});