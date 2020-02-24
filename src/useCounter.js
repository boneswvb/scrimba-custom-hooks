import {useState} from 'react'

const useCounter = () => {
	const [count, setCount] = useState(0)
    
  const increment = () => {
   setCount(prevCount => prevCount + 1)
  }
  return [count, increment]
}

export default useCounter