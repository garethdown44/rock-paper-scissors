import styled from 'styled-components'
import { Weapon } from '../../types'
import { Rock, Paper, Scissors } from './weapons'
import { Button } from '../common/primitives'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

type Props = {
  onShoot: (weapon: Weapon) => void  
}

export default function Weapons ({ onShoot }: Props) {
  return (
    <Wrapper>
      <Button onClick={() => onShoot('rock')}>
        <Rock />
      </Button>
      <Button onClick={() => onShoot('paper')}>
        <Paper />
      </Button>
      <Button onClick={() => onShoot('scissors')}>
        <Scissors />
      </Button>
    </Wrapper>
  )
}