export default (el, init_model) => {
    let model = init_model
  
    return { 
      el,
      data: {
        personData: model.latestMeasurement()
      },
      methods: {
        async hire() {
            const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
            const data_res = await fetch('http://localhost:8080/data', { method: 'GET', headers })
            const data = await data_res.json()
            const forecast_res = await fetch('http://localhost:8080/forecast', { method: 'GET', headers })
            const forecast = await person_res.json()
            model = model.latestMeasurement(data)
            this.personData = model.latestMeasurement(data)
        }
      }
     }
  }