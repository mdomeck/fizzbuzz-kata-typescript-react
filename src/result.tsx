import { FC } from "react"

type Props = {
  currentResult: number
}
const Result: FC<Props> = ({ currentResult }: Props) => {

  return (
    <span>{result()}</span>
  )

  function result() {
    if (multOfFifteen()) {
      return 'FizzBuzz'
    }
    if (multOfFive()) {
      return 'Buzz'
    }
    if (multOfThree()) {
      return 'Fizz'
    }
    return currentResult
  }

  function multOfFifteen() {
    return currentResult % 15 === 0
  }

  function multOfFive() {
    return currentResult % 5 === 0
  }

  function multOfThree() {
    return currentResult % 3 === 0
  }
}

export default Result
