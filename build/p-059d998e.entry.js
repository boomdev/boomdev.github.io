import{r,h as p}from"./p-f7de5752.js";let s=class{constructor(p){r(this,p)}normalize(r){return r?r.substr(0,1).toUpperCase()+r.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return p("div",{class:"app-profile"},p("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};s.style=".app-profile{padding:10px}";export{s as app_profile}