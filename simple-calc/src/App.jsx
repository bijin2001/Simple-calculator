import { TextField, Stack, Button } from '@mui/material';
import './App.css'
import { useState } from 'react';
function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleInValid, setIsPrincipleInValid] = useState(false)
  const [isRateInValid, setIsRateInValid] = useState(false)
  const [isYearInValid, setIsYearInValid] = useState(false)


  const inputValidaiton = (tag) => {

    const { name, value } = tag
    // console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // !! true or false

    if (!!value.match(/^\d*\.?\d+$/)) {
      // \d = 0 - 9
      // valid
      if (name == "principle") {

        setPrinciple(value)
        setIsPrincipleInValid(false)
      } else if (name == "rate") {

        setRate(value)
        setIsRateInValid(false)
      } else {

        setYear(value)
        setIsYearInValid(false)
      }

    } else {
      // invalid
      if (name == "principle") {

        setPrinciple(value)
        setIsPrincipleInValid(true)
      } else if (name == "rate") {

        setRate(value)
        setIsRateInValid(true)
      } else {

        setYear(value)
        setIsYearInValid(true)
      }
    }
  }
  const handleCalculation = (event) => {
    event.preventDefault()
    // preventDefault() is used to prevent additional event that happening on the function
    console.log("clicked");

    if (principle && rate && year) {

      setInterest(principle * rate * year / 100)
    } else {

      alert("Please fill the form")
    }
  }

  const handleReset = () => {

    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInValid(false)
    setIsRateInValid(false)
    setIsYearInValid(false)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div className='bg-light p-5 rounded' style={{ width: '600px' }}>
        <h3 style={{ fontSize: '1.5em' }}>Simple Interest Calculator</h3>
        <p style={{ fontWeight: '300' }}>Calculate your simple interest Easily</p>

        <div style={{ backgroundColor: 'darkorange' }} className='d-flex justify-content-center align-items-center p-3 text-light rounded flex-column shadow rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>

        </div>

        <form className='mt-5'>
          <div className='mb-3'>
            <TextField id="principle" value={principle || ""} name='principle' onChange={event => inputValidaiton(event.target)} className='w-100' label="₹ Principle Amount" variant="outlined" />

          </div>
          {

            isPrincipleInValid &&
            <div className='mb-5 text-danger fw-bolder'>Invalid Input</div>

          }
          <div className='mb-3'>
            <TextField id="rate" value={rate || ""} name='rate' onChange={event => inputValidaiton(event.target)} className='w-100' label="Rate of interest (p.a) %" variant="outlined" />

            {
              isRateInValid &&
              <div className='mb-5 text-danger fw-bolder'>Invalid Input</div>
            }

          </div>
          <div className='mb-3'>
            <TextField id="year" value={year || ""} name='year' onChange={event => inputValidaiton(event.target)} className='w-100' label="Time Period (Yr)" variant="outlined" />

            {
              isYearInValid &&
              <div className='mb-5 text-danger fw-bolder'>Invalid Input</div>

            }
          </div>

          <Stack direction="row" spacing={2}>

            <Button disabled={isPrincipleInValid || isRateInValid || isYearInValid} type='submit' onClick={handleCalculation} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button style={{ width: '50%', height: '70px' }} onClick={handleReset} variant="outlined">Reset</Button>

          </Stack>
        </form>

      </div>
    </div>
  )
}

export default App
