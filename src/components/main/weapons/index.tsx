import styled from 'styled-components'
import { Weapon, Result } from '../../../redux/modules/game/game'
import { Rock, Paper, Scissors } from './icons'

export type WeaponViewProps = {
  name: Weapon
  result?: Result
}

export default function WeaponView({ name, result }: WeaponViewProps) {
  return (
    <SvgContainer title={name} result={result}>
      {getComponent(name)}
    </SvgContainer>
  )
}

function getColor(result?: Result) {
  if (!result) {
    return '#3E87D7'
  }
  
  switch (result) {
    case 'WIN': return '#55A64D'
    case 'LOSE': return '#B1383D'
    case 'DRAW': return '#4C565F'
  }
}

type SvgContainerProps = {
  result?: Result
}

const SvgContainer = styled.div<SvgContainerProps>`
  svg {
    fill: ${props => getColor(props.result)}
  }
`

function getComponent(weapon: Weapon) {
  switch (weapon) {
    case 'rock': return <Rock />
    case 'paper': return <Paper />
    case 'scissors': return <Scissors />
  }
}