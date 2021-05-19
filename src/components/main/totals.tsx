import styled from 'styled-components'

export type Props = {
  wins: number
  draws: number
  losses: number
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 35px;
  letter-spacing: 0px;
  color: #333;
  opacity: 1;
  width: 416px;
`

const Total = styled.div`
  display: flex;
`

const Label = styled.div`
  padding-right: 8px;
`

const Value = styled.div`
`

export default function Totals ({ wins, draws, losses }: Props) {
  return (
    <Wrapper>
      <Total data-testid="won">
        <Label>Won:</Label>
        <Value>{wins}</Value>
      </Total>
      <Total data-testid="lost">
        <Label>Lost:</Label>
        <Value>{losses}</Value>
      </Total>
      <Total data-testid="draw">
        <Label>Draw:</Label>
        <Value>{draws}</Value>
      </Total>
    </Wrapper>
  )
}