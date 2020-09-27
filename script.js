var app = new Vue({
    el: "#app",
    data:{
       lan: "EN",
       en: "EN",
       de: "DE",
       es: "ES",
       fr: "FR",
       engb: "EN-GB",
       selecEN: false,
       selecDE: false,
       selecSE: false,
       selecFR: false,
       selecENGB: false,
       gameVisi: false,
       releasesVisi: false,   
       mediaVisi: false,
       communityVisi: false, 
       servicesVisi: false,
       shopVisi: false,
       raceActive: false,
       professionsActive: false,
    },
    methods: {
        langEN(){
            this.selecEN = true
            this.selecDE = false
            this.selecSE = false
            this.selecFR = false
            this.selecENGB = false
            if(this.selecEN === true) {
               this.lan = this.en
            }
        },
        langDE(){
            this.selecEN = false
            this.selecDE = true
            this.selecSE = false
            this.selecFR = false
            this.selecENGB = false
            if(this.selecDE === true) {
               this.lan = this.de
            }
        },
        langES(){
            this.selecEN = false
            this.selecDE = false
            this.selecSE = true
            this.selecFR = false
            this.selecENGB = false
            if(this.selecSE === true) {
               this.lan = this.es
            }
        },
        langFR(){
            this.selecEN = false
            this.selecSE = false
            this.selecDE = false
            this.selecFR = true
            this.selecEN_GB = false
            if(this.selecFR === true) {
               this.lan = this.fr
            }
        },
        langENGB(){
            this.selecEN = false
            this.selecSE = false
            this.selecDE = false
            this.selecFR = false
            this.selecENGB = true
            if(this.selecENGB === true) {
               this.lan = this.engb
            }
        },
        
        gameVisible(){
            this.gameVisi = true
            this.releasesVisi = false
            this.mediaVisi = false
            this.communityVisi = false
            this.servicesVisi = false
            this.shopVisi = false
        },
        gameOcult(){
            this.gameVisi = false
        },
        releasesVisible(){
            this.gameVisi = false
            this.releasesVisi = true
            this.mediaVisi = false
            this.communityVisi = false
            this.servicesVisi = false
            this.shopVisi = false
        },
        releasesOcult(){
            this.releasesVisi = false
        },
        mediaVisible(){
            this.gameVisi = false
            this.releasesVisi = false
            this.mediaVisi = true
            this.communityVisi = false
            this.servicesVisi = false
            this.shopVisi = false
        },
        mediaOcult(){
            this.mediaVisi = false
        },
        communityVisible(){
            this.gameVisi = false
            this.releasesVisi = false
            this.mediaVisi = false
            this.communityVisi = true
            this.servicesVisi = false
            this.shopVisi = false
        },
        communityOcult(){
            this.communityVisi = false
        },
        servicesVisible(){
            this.gameVisi = false
            this.releasesVisi = false
            this.mediaVisi = false
            this.communityVisi = false
            this.servicesVisi = true
            this.shopVisi = false
        },
        servicesOcult(){
            this.servicesVisi = false
        },
        shopVisible(){
            this.gameVisi = false
            this.releasesVisi = false
            this.mediaVisi = false
            this.communityVisi = false
            this.servicesVisi = false
            this.shopVisi = true
        },
        shopOcult(){
            this.shopVisi = false
        },
        racesVisible(){
            this.raceActive = true
            this.professionsActive = false
        },
        racesOcult(){
            this.raceActive = false
        },
        professionVisible(){
            this.raceActive = false
            this.professionsActive = true
        },
        professionOcult(){
            this.professionsActive = false
        },
    },
   
});
