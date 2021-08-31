import styled from "styled-components"

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`

const Score = ({ score }) => {
  return(
    <ScoreContainer>
      <div>Score:</div>
      <div>{score}</div>
    </ScoreContainer>
  )
}

export default Score