import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(allNewDice())  
  const [tenzies, setTenzies] = useState(false) 
  
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die =>  die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [dice])
  
  function generateDice() {
    return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      }
    }

  function allNewDice() {
    let newDice = []
    for( let i = 0; i < 10; i++) {
      newDice.push(generateDice())
    }
    return newDice
    }    
    

  function rollDie() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateDice()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))  
  }

  const diceComponents = dice.map(die => (
    <Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
    ))

  return (
    <div className="App">
      {tenzies && <Confetti /> }
      <div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
       Click each die to freeze it at its current value between rolls.</p> 
      </div>
      <div className="dice-wrap">
      {diceComponents}
      </div>
      {tenzies && <h1 className="won">You Won!</h1>}
      <button 
        onClick={rollDie}
        className="roll-btn"
        >
          {tenzies ? 'New Game':'Roll'}
      </button>
    </div>
  )
}

export default App
