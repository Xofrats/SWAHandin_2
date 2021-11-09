const store = () => {
const reducer = (action, state) => {
    switch(action.type) {
      case 'hire':
        console.log("Hello store!");
        const { data } = action
        return state.latestMeasurement(data)
        
      default:
        return state
    }
  }
  
    return {reducer}
}
