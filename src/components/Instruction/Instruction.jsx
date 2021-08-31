import styled from 'styled-components'

const Board = styled.div`
  padding: 20px;
  width: 600px;
  height: 600px;
`

const Header = styled.h3`
  text-align: center;
  margin: 10px;
`

const Content = styled.p`
  text-align: left;
  margin: 0px;
`

const Instruction = () => {
  return (
    <Board>
      <Header>Instruction</Header>
      <Content>
        - Click on the card to view the back face of the card. <br />
        - Get two exact same card to score.<br />
        - Score are based on the time and level. <br />
        - You only have 60s for each level. <br />
        - There are three levels, '2x2', '4x4' and '6x6'. <br />
        - Press 'Start Game' button when you are ready.
      </Content>
    </Board>
  )
}

export default Instruction