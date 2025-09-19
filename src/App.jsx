import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { Routes, Route } from 'react-router-dom'
import Healthy from './Components/Healthy/Healthy'
import Fitness from './Components/Fitness/Fitness'
import Eat from './Components/Eat/Eat'
import Bmi from './Components/BMI/Bmi'
import Fitnessp from './Components/Fitness/Fitnessp'
import Fitnessk from './Components/Fitness/Fitnessk'
import Fitnesst from './Components/Fitness/Fitnesst'
import Eate from './Components/Eat/Eate'
import Eatk from './Components/Eat/Eatk'
import Eatt from './Components/Eat/Eatt'



const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/f' element={<Fitness />}/>
        <Route path='/e' element={<Eat />}/>
        <Route path='/h' element={<Healthy />}/>
        <Route path='/b' element={<Bmi />}/>
        <Route path='/fp' element={<Fitnessp />}/>
        <Route path='ft' element={<Fitnesst />}/>
        <Route path='/fk' element={<Fitnessk />}/>
        <Route path='/ee' element={<Eate />}/>
        <Route path='/ek' element={<Eatt />}/>
        <Route path='/et' element={<Eatk />}/>
      </Routes> 
    </div>
  )
}

export default App