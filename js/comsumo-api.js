
const { createApp } = Vue


createApp({
    data() {
        return {
            
            error: false,
            url: "https://randomuser.me/api/?results=5",
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
     this.datos = data.results
  } ) ;
}
},
created() {
    this.fetchData(this.url)
}

 
}).mount('#app')
/*
const url = 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=hanoi&languagecode=en-us';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9467e8e682msh66d233073271c9dp182efejsnedfd3aacb087',
		'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
	}
};
try {
	const response =  fetch(url, options);
	const result =  [4];
	console.log(result);
} catch (error) {
	console.log(error);
}
*/