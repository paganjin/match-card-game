import styled from 'styled-components'

const ButtonContainer = styled.button`
  font-family: inherit;
  background-color: #8cdcda;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  line-height: 1rem;
  cursor: pointer;
  width: 100px;
`

const StartButton = ({ handleOnClick, startTimer }) => {
  return (
    <ButtonContainer onClick={handleOnClick}>
      {startTimer ? 'Quit Game' : 'New Game'}
    </ButtonContainer>
  )
}

export default StartButton