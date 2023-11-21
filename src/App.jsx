import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner';
import {originals, action, romance} from './urls'
import './App.css';
import RowPost from './components/RowPost/RowPost';


const App = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <RowPost url = {originals} title ='Netflix originals'/>
      <RowPost url= {action} title = 'Actions' isSmall/>
      <RowPost url= {romance} title = 'Romance' isSmall/>
      
    </div>
  )
}

export default App