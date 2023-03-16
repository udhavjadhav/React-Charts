import React from 'react'
import BarChart from './Components/BarChart/BarChart'
import LineChart from './Components/LineChart/LineChart'
import PieChart from './Components/PieChart/PieChart'
import './App.css'
import Area from './Components/Area/Area'
import PolarAreaChart from './Components/Polar Chart/PolarAreaChart'
import ScatterChart from './Components/Scatter/Scatter'
import RadarChart from './Components/RadarChart/RadarChart'
import BubbleChart from './Components/BubbleChart/BubbleChart'
const App = () => {
    window.localStorage.setItem("name", "Udhav")
    window.localStorage.setItem("age", 25)
    window.localStorage.setItem("salary", 50000)
  return (
    <div>
      <h1 className='heading'>Reacts Charts</h1>
    <div className='app'>
      <BarChart/>
      <LineChart/>
      <PieChart/>
      <Area/>
      <PolarAreaChart/>
      <ScatterChart/>
      <RadarChart/>
      <BubbleChart/>
    </div>
    </div>
  )
}

export default App