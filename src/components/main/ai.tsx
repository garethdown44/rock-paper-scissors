import styled from 'styled-components'
import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Wrapper, Box, StyledHeading } from './primitives'
import WeaponView from './weapons/index'

export type Props = {
  weapon?: Weapon
  countdownValue?: number
  result?: Result
}

const CountdownValue = styled.div`
  font-family: Helvetica Neue;
  font-size: 200px;
  letter-spacing: 0px;
  color: #4C9BDE;
`

const WithMargin = styled.div<{ isFinished: boolean }>`
  transition: margin-bottom .2s ease-out;
  margin-bottom: ${props => props.isFinished ? '60px' : '0px'};
  /* margin-bottom: '60px'; */
`

function Show(props: Props) {
  console.log('SHOW', props)
  if (!props.result) {
    return (
      <CountdownValue>{props.countdownValue}</CountdownValue>
    )
  }

  return (
    <WithMargin isFinished={props.result !== undefined}>
      <WeaponView
        name={props.weapon!}
        result={props.result}
        />
    </WithMargin> 
  )
}

export default function Ai(props: Props) {
  return (
    <Wrapper>
      <StyledHeading>
          AI
      </StyledHeading>
      <Box>
        <Show {...props} />
      </Box>
    </Wrapper>
  )
}