import rock from './rock.svg'
import paper from './paper.svg'
import scissors from './scissors.svg'

export function Rock() {
  return <img src={rock} alt="Rock" />
}

export function Paper() {
  return <img src={paper} alt="Paper" />
}

export function Scissors() {
  return <img src={scissors} alt="Scissors" />
}