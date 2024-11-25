import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tablero,setTablero] = useState([
    1,2,3,4,5,
    6,7,8,9,10,
    11,12,13,14,15,
    16,17,18,19,20,
    21,22,23,24,25])
  const cambiarContenido = (index,simbolo)=>{
    setTablero(
      Arr =>{
        const newArr = [...Arr]
        newArr[index]=simbolo
        return newArr
      } 
    )
  }
  useEffect(()=>{
    setTablero(cambiarContenido(Math.floor(Math.random()*4),'💰'))
  })
  const pressed = (e)=>{
      const valI = e.target.getAttribute('region')
      const valJ = e.target.getAttribute('value')
      console.log(valI)
      if (tablero[valI] == '💰'){
        console.log('GANASTE')
        alert('GANASTE')
      } else {
        cambiarContenido(valI,'✖️')
      }
  }
  

  return (
    <>
      <div className='container'>
        <div oculto='true' region='0' value='1' onClick={pressed} className='item'>{tablero[0]}</div>
        <div oculto='true' region='0' value='2' onClick={pressed} className='item'>{tablero[1]}</div>
        <div oculto='true' region='0' value='3' onClick={pressed} className='item'>{tablero[2]}</div>
        <div oculto='true' region='0' value='4' onClick={pressed} className='item'>{tablero[3]}</div>
        <div oculto='true' region='0' value='5' onClick={pressed} className='item'>{tablero[4]}</div>
        <div oculto='true' region='1' value='1' onClick={pressed} className='item'>{tablero[5]}</div>
        <div oculto='true' region='1' value='2' onClick={pressed} className='item'>{tablero[6]}</div>
        <div oculto='true' region='1' value='3' onClick={pressed} className='item'>{tablero[7]}</div>
        <div oculto='true' region='1' value='4' onClick={pressed} className='item'>{tablero[8]}</div>
        <div oculto='true' region='1' value='5' onClick={pressed} className='item'>{tablero[9]}</div>
        <div oculto='true' region='2' value='1' onClick={pressed} className='item'>{tablero[10]}</div>
        <div oculto='true' region='2' value='2' onClick={pressed} className='item'>{tablero[11]}</div>
        <div oculto='true' region='2' value='3' onClick={pressed} className='item'>{tablero[12]}</div>
        <div oculto='true' region='2' value='4' onClick={pressed} className='item'>{tablero[13]}</div>
        <div oculto='true' region='2' value='5' onClick={pressed} className='item'>{tablero[14]}</div>
        <div oculto='true' region='3' value='1' onClick={pressed} className='item'>{tablero[15]}</div>
        <div oculto='true' region='3' value='2' onClick={pressed} className='item'>{tablero[16]}</div>
        <div oculto='true' region='3' value='3' onClick={pressed} className='item'>{tablero[17]}</div>
        <div oculto='true' region='3' value='4' onClick={pressed} className='item'>{tablero[18]}</div>
        <div oculto='true' region='3' value='5' onClick={pressed} className='item'>{tablero[19]}</div>
        <div oculto='true' region='4' value='1' onClick={pressed} className='item'>{tablero[20]}</div>
        <div oculto='true' region='4' value='2' onClick={pressed} className='item'>{tablero[21]}</div>
        <div oculto='true' region='4' value='3' onClick={pressed} className='item'>{tablero[22]}</div>
        <div oculto='true' region='4' value='4' onClick={pressed} className='item'>{tablero[23]}</div>
        <div oculto='true' region='4' value='5' onClick={pressed} className='item'>{tablero[24]}</div>
      </div>
    </>
  )
}

export default App
