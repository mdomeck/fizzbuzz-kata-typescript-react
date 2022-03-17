import { FC } from "react"

type Props = {
  currentResult: number
}
const FizzBuzz: FC<Props> = ({ currentResult }: Props) => {

  return (
    <span>{result()}</span>
  )

  function result(): string {
    if (currentResult % 15 === 0) {
      return 'FizzBuzz'
    }
    if (currentResult % 5 === 0) {
      return 'Buzz'
    }
    if (currentResult % 3 === 0) {
      return 'Fizz'
    }
    return `${currentResult}`
  }
}

export default FizzBuzz
