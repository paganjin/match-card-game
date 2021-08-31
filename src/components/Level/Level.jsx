import styled from "styled-components"

const LevelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`

const Level = () => {
  return(
    <LevelContainer>
      <div>Current Level:</div>
      <div>1</div>
    </LevelContainer>
  )
}

export default Level