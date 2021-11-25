
import React from 'react'
// import ApiContainer from './components/ApiContainer'
import JsonFile from './components/Ui'
// import Sample from './components/Sample'
import Top from './components/Appbar'
import {makeStyles} from '@mui/styles'
import terra from './images/terra.png'


const style=makeStyles({
  root:{
    backgroundColor:"lightblue",
    
  

  },
  container: {
    backgroundImage: `url(${terra})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
}
})

function App() {
  const classes=style()
  return (
    <div className={classes.container}>
    <Top/>
    <JsonFile/>
 
     </div>
  )
}

export default App
