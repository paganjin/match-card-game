import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Card from '../Card'

const  BoardContainer = styled.div`
  height: 450px;
  width: 450px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap
`

const Board = ({ cardArray, checkScore }) => {
  const [cards, setCards] = useState(cardArray)
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])

  const validateCheckers = (checkers) => {
    return checkers.length === 2 && checkers[0].type === checkers[1].type
  }

  const cardAlreadyInCheckers = (checkers, card) => {
    return checkers.length === 1 && checkers[0].id === card.id
  }

  const checkerIsFull = (checkers) => {
    return checkers.length === 2
  }

  const resetCheckersAfter = (time) => {
    setTimeout(() => {
      setCheckers([])
    }, time)
  }

  const onCardClick = card => () => {
    if (checkerIsFull(checkers) || cardAlreadyInCheckers(checkers, card)) return 
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkerIsFull(newCheckers)) {
      resetCheckersAfter(1500)
    }
  }

  const newCards = cards.map(prevState => ({
    ...prevState,
    flipped:
      checkers.find(card => card.id === prevState.id) ||
      completed.includes(prevState.type),
  }))

  useEffect(() => {
    setCards(newCards)
  // eslint-disable-next-line 
  },[checkers, completed]) //add [cards] here will cause infinite loop

  useEffect(() => {
    checkScore(completed.length)
  }, [checkScore, completed])

  return (
    <BoardContainer>
      {cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </BoardContainer>
  )
}

export default Board