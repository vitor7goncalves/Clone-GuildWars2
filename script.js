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
       gameVisi: "invisible",
       releasesVisi: "invisible",   
       mediaVisi: "invisible",
       communityVisi: "invisible", 
       servicesVisi: "invisible",
       shopVisi: "invisible",
       raceActive: "invisible",
       professionsActive: "invisible",
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
            this.gameVisi = "visible"
            this.releasesVisi = "invisible"
            this.mediaVisi = "invisible"
            this.communityVisi = "invisible"
            this.servicesVisi = "invisible"
            this.shopVisi = "invisible"
        },
        gameOcult(){
            this.gameVisi = "invisible"
        },
        releasesVisible(){
            this.gameVisi = "invisible"
            this.releasesVisi = "visible"
            this.mediaVisi = "invisible"
            this.communityVisi = "invisible"
            this.servicesVisi = "invisible"
            this.shopVisi = "invisible"
            this.raceActive = "invisible2"
        },
        releasesOcult(){
            this.releasesVisi = "invisible"
        },
        mediaVisible(){
            this.gameVisi = "invisible"
            this.releasesVisi = "invisible"
            this.mediaVisi = "visible"
            this.communityVisi = "invisible"
            this.servicesVisi = "invisible"
            this.shopVisi = "invisible"
            this.raceActive = "invisible2"
        },
        mediaOcult(){
            this.mediaVisi = "invisible"
        },
        communityVisible(){
            this.gameVisi = "invisible"
            this.releasesVisi = "invisible"
            this.mediaVisi = "invisible"
            this.communityVisi = "visible"
            this.servicesVisi = "invisible"
            this.shopVisi = "invisible"
            this.raceActive = "invisible2"
        },
        communityOcult(){
            this.communityVisi = "invisible"
        },
        servicesVisible(){
            this.gameVisi = "invisible"
            this.releasesVisi = "invisible"
            this.mediaVisi = "invisible"
            this.communityVisi = "invisible"
            this.servicesVisi = "visible"
            this.shopVisi = "invisible"
            this.raceActive = "invisible2"
        },
        servicesOcult(){
            this.servicesVisi = "invisible"
        },
        shopVisible(){
            this.gameVisi = "invisible"
            this.releasesVisi = "invisible"
            this.mediaVisi = "invisible"
            this.communityVisi = "invisible"
            this.servicesVisi = "invisible"
            this.shopVisi = "visible"
            this.raceActive = "invisible2"
        },
        shopOcult(){
            this.shopVisi = "invisible"
        },
        racesVisible(){
            this.raceActive = "visible2"
            this.professionsActive = "invisible2"
        },
        racesOcult(){
            this.raceActive = "invisible2"
        },
        professionVisible(){
            this.raceActive = "invisible2"
            this.professionsActive = "visible2"
        },
        professionOcult(){
            this.professionsActive = "invisible2"
        },
        endAction(){
            this.gameVisi = "invisible"
            this.raceActive = "invisible2"
            this.professionsActive = "invisible2"
        },
    },
   
});
