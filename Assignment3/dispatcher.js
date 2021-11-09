const dispatcher = () => {

const store = async ({type, ...params}) =>  {
    switch(type) {

      case 'hire':
        console.log("Hello dispatcher!");
        const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
        const data = await fetch('http://localhost:8080/data',
          { method: 'GET', 
            headers}).then(res => res.json())
        const forecast = await fetch('http://localhost:8080/forecast',
          { method: 'GET', 
            headers}).then(res => res.json())
        store({type, ...params, data, forecast})

      break;


        default:
      
    }
  }

  return{store}
}
