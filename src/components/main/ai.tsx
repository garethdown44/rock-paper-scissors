import styled from 'styled-components'
import { Weapon } from '../../types'
import { Result } from '../../redux/modules/game/game'
import { Wrapper, AiBox, StyledHeading } from './primitives'
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

function Show(props: Props) {
  if (!props.result) {
    return (
      <CountdownValue role="timer">{props.countdownValue}</CountdownValue>
    )
  }

  return (
    <WeaponView
      name={props.weapon!}
      result={props.result}
    />
  )
}

const WeaponWrapper = styled.div<{ isFinished: boolean }>`
  transition: margin-bottom .2s ease-out;
  margin-bottom: ${props => props.isFinished ? '140px' : '40px'};
`

export default function Ai(props: Props) {
  return (
    <Wrapper title="AI">
      <StyledHeading>
          AI
      </StyledHeading>
      <AiBox>
        <WeaponWrapper isFinished={!!props.result}>
          <Show {...props} />
        </WeaponWrapper>
      </AiBox>
    </Wrapper>
  )
}