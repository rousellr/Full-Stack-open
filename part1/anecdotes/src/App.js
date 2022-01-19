import React, { useState } from 'react'

const Header = ({ text }) => (<h1>{text}</h1>)

const Button = ({ text, onClick }) => (<button onClick={onClick}>{text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const max = Math.max(...points)
  const index = points.indexOf(max) 

  const vote = () => {
    const copy = [...points]
    copy[selected] = copy[selected] += 1
    return (
      setPoints(copy)
    )
  }
  return (
    <div>
      <Header text='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={() => vote()} text='vote' />
      <Button onClick={() => setSelected(Math.floor(Math.random() * 7))} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <p>{anecdotes[index]}</p>
      <p>has {points[index]} votes</p>
    </div>
  )
}

export default App