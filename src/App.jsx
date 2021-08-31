import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Board from './components/Board'
import Timer from './components/Timer'
import Level from './components/Level'
import Score from './components/Score'
import StartButton from './components/StartButton'
import Instruction from './components/Instruction'

import backImg from './components/assets/icons/m.png'
import aws from './components/assets/icons/aws.svg'
import css from './components/assets/icons/css3.svg'
import github from './components/assets/icons/github.svg'
import html from './components/assets/icons/html5.svg'
import linkedIn from './components/assets/icons/linkedIn.svg'
import react from './components/assets/icons/react.svg'
import sass from './components/assets/icons/sass.svg'
import nodejs from './components/assets/icons/nodejs.svg'

import './App.css'

const Container = styled.div`
  text-align: center;
  padding: 50px;
`

const Title = styled.h1`
  margin: 20px;
`

const GameStatus = styled.div`
  width: 500px;
  display: flex;
`

const imgArray = {
  aws,
  css,
  github,
  html,
  linkedIn,
  react,
  sass,
  nodejs
}

const buildCards = () => {
  let id = 0
  const cards = Object.keys(imgArray).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: imgArray[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return shuffleCards(cards)
}

const shuffleCards = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let randomIdx = Math.floor(Math.random() * arr.length)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}

const App = () => {
  const cards = buildCards()
  const [initialTime, setInitialTime] = useState(0)
  const [startTimer, setStartTimer] = useState(false)
  const [score, setScore] = useState(0)
  const timerRef = useRef(null)

  const handleOnClick = () => {
    if (!startTimer) {
      setInitialTime(60)
      setScore(0)
      setStartTimer(true)
    } else {
      setInitialTime(0)
      setScore(0)
      setStartTimer(false)
    }
  }

  const checkScore = (newScore) => {
    setScore(newScore)
  }

  useEffect(() => {
    if (initialTime > 0) {
      timerRef.current = setTimeout(() => {
        setInitialTime(initialTime - 1)
      }, 1000)
      return () => clearTimeout(timerRef.current)
    }

    if (initialTime === 0 && startTimer) {
      alert(`Timeout! Your got + ${score}`)
      setStartTimer(false)
      setScore(0)
      setInitialTime(0)
      return () => clearTimeout(timerRef.current)
    }  
  }, [initialTime, score, startTimer])

  useEffect(() => {
    if (score === 8 && startTimer) { //when you reach the score, there will be a warning in console
      alert(`You are good! Your got + ${score}`) //Can't perform a React state update on an unmounted component.
      setStartTimer(false)
      setScore(0)
      setInitialTime(0)
      return () => clearTimeout(timerRef.current)
    }  
  }, [score, startTimer]) 

  return (
    <Container>
      <Title>The Match Card Game</Title>
      <GameStatus>
        <Level />
        <Score score={score}/>
        <StartButton handleOnClick={handleOnClick} startTimer={startTimer}/>
      </GameStatus>
      <Timer initialTime={initialTime} />
      {startTimer
        ? (<Board cardArray={cards} checkScore={checkScore}/>)
        : (<Instruction />)}
    </Container>
  )
}

export default App

