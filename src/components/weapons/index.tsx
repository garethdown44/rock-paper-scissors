import styled from 'styled-components'
import { Weapon } from '../../types'
import Rock from './rock'
import Paper from './paper'
import Scissors from './scissors'
import Button from './button';

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