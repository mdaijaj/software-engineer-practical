
const NodeGeocoder = require('node-geocoder');


const findLocation= async()=>{

  fetch('https://maps.googleapis.com/map/api/geocode/json', {
    params: {
      address: "New Delhi",
      key: "AIzaSyAQ_whj_1erp3EJhc-pLDo8anC2w7vtkcA"
    }
  }).then((response)=>{
    console.log('response', response)
    console.log(response.data)
  })
    // const options = {
    //     provider: 'google',
      
    //     // Optional depending on the providers
    //     fetch: 'https://maps.googleapis.com/map/api/geocode/json',
    //     apiKey: 'AIzaSyAQ_whj_1erp3EJhc-pLDo8anC2w7vtkcA', // for Mapquest, OpenCage, Google Premier
    //     formatter: null // 'gpx', 'string', ...
    //   };
      
    //   const geocoder = NodeGeocoder(options);
      // Using callback
    // const res = await geocoder.geocode('29 champs elysée paris');

    // console.log("res", res)
}

findLocation()


setTimeout(() => {
  
}, timeout);