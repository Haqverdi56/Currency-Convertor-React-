import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
  const [data, setData] = useState('')
  const [firsVal, setFirstVal] = useState(0)
  const [secondVal, setSecondVal] = useState(0)
  const [firstOpt, setFirstOpt] = useState(0)
  const [secondOpt, setSecondOpt] = useState(0)

  const Currency = () => {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=eRFp8JVBUuRprAHvbCoYhUV8UP0cHQ8OhYn10wm1")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(Object.entries(res.data))
      })
  }

  useEffect(() => {
    Currency();
  }, [])


  const changeFirst = (e) => {
    setFirstVal(e.target.value)
    setSecondVal((e.target.value*secondOpt/firstOpt).toFixed(3))
  }
  const changeSecond = (e) => {
    setSecondVal(e.target.value)
    setFirstVal((e.target.value*firstOpt/secondOpt).toFixed(3))
  }


  const firstOption = (e) => {
    setFirstOpt(e.target.value)
    setSecondVal((e.target.value*secondOpt/firstOpt).toFixed(3))
  }
  const secondOption = (e) => {
    setSecondOpt(e.target.value)
    setFirstVal((e.target.value*firstOpt/secondOpt).toFixed(3))
  }

  return (
    <div className='convert'>
      <h1>Currency Converter</h1>
      <div>
        <input type="number" min={0} value={firsVal} onChange={changeFirst} />
        <select onChange={firstOption}>
          <option>Select Currency</option>
          {
            data && data.map((item, i) => (
              <option key={i} value={item[1]}> {item[0]} </option>
            ))
          }
        </select>
      </div>

      <div>
        <input type="number" min={0} value={secondVal} onChange={changeSecond}/>
        <select onChange={secondOption}>
          <option>Select Currency</option>
          {
            data && data.map((item, i) => (
              <option key={i} value={item[1]}> {item[0]} </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default Table
