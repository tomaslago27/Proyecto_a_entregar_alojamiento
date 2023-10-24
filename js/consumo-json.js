
const { createApp } = Vue


createApp({
    data() {
        return {
            
            error: false,
            url: "./js/api-creada.json",
            datos:[]
        }
    },
methods:
{
fetchData(url) {
 fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     this.datos = data.Resultados
  } ) ;
}
},
created() {
    this.fetchData(this.url)
}

 
}).mount('#app')