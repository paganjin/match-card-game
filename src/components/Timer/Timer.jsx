import styled from 'styled-components'

const TimerContainer = styled.div`
  margin-top: 10px;
  width: 550px;
  background-color: #51cac7;
  border-radius: 5px;
`

const TimerBar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  line-height: 20px;
  background-color: #8cdcda;
  box-shadow: #8cdcda 0px 0 10px;
`

const Timer = ({ initialTime }) => {
  return (
    <TimerContainer>
      <TimerBar>{initialTime}</TimerBar>
    </TimerContainer>
  )
};

export default Timer

