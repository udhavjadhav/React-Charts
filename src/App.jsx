import React from 'react'
import BarChart from './Components/BarChart/BarChart'
import LineChart from './Components/LineChart/LineChart'
import PieChart from './Components/PieChart/PieChart'
import './App.css'
import Area from './Components/Area/Area'
const App = () => {
    window.localStorage.setItem("name", "Udhav")
    window.localStorage.setItem("age", 25)
    window.localStorage.setItem("salary", 50000)
  return (
    <div className='app'>
      <BarChart/>
      <LineChart/>
      <PieChart/>
      <Area/>
    </div>
  )
}

export default App