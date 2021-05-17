import styled from 'styled-components'
import rock from './rock.svg'
import paper from './paper.svg'
import scissors from './scissors.svg'

export type IconProps = {
  size: 'small' | 'large'
}

const StyledImage = styled.img<IconProps>`
  width: ${props => props.size === 'small' ? '60px' : '134px'};
  height: ${props => props.size === 'small' ? '60px' : '134px'};
`

export function Rock({ size }: IconProps) {
  return (
    <StyledImage
      size={size}
      src={rock}
      alt="Rock"
    />
  )
}

export function Paper({ size }: IconProps) {
  return (
    <StyledImage
      size={size}
      src={paper}
      alt="Paper"
    />
  )
}

export function Scissors({ size }: IconProps) {
  return (
    <StyledImage
      size={size}
      src={scissors}
      alt="Scissors"
    />
  )
}