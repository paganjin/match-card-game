import styled from 'styled-components'

const CardContainer = styled.div`
  flex: 1

  &:hover{
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 100px;
  height: 100px;
`

const Card = props => {
  const {frontImg, backImg, flipped, onClick} = props
  const img = flipped ? frontImg : backImg
  return (
    <CardContainer onClick={onClick}>
      <Image src={img} alt=""/>
    </CardContainer>
  )
}

export default Card