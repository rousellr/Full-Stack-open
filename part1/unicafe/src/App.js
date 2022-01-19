import React, { useState } from 'react'


const Header = ({ text }) => (<h1>{text}</h1>)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  if (good == 0 && neutral == 0 && bad ==0){
    return (
      <div>
        please give feedback!
      </div>
    )  
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={(good - bad)/total} />
        <StatisticLine text='positive' value={good/(good +  + neutral + bad)*100+'%'} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value })  => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => {
    setGood(newValue)
  }
  
  const setNeutralValue = (newValue) => {
    setNeutral(newValue)
  }
  
  const setBadValue = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGoodValue(good + 1)} text='good' />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBadValue(bad + 1)} text='bad' />
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
