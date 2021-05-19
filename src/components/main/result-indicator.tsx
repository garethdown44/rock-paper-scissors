import styled from 'styled-components'
import { Result } from '../../redux/modules/game/game'

type Props = {
  result?: Result
}

const StyledDiv = styled.div < { isVisible: boolean }>`
  font-weight: 500;
  font-size: 60px;
  letter-spacing: 0px;
  color: #5E6972;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden' };
  width: 260px;
  text-align: center;
  padding: 0 10px;
  margin-top: 60px;
`

export default function ResultIndicator ({ result }: Props) {
  return (
    <StyledDiv isVisible={!!result}>
      {formatResult(result)}
    </StyledDiv>
  )
}

function formatResult(result?: Result) {
  if (result === 'WIN') {
    return 'WIN!'
  }

  if (result === 'LOSE') {
    return 'LOST'
  }

  return result
}