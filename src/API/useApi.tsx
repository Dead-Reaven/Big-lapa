import { useEffect, useState } from 'react'

const data = {
  // other data
  contacts: {
    phone1: '+38 068 000 7777',
    phone2: '+38  095 111 1447',
    mail: 'test@gmail.com',
  },
  type: 'post',
}

function useApi() {
  const [State, setState] = useState(data)
  useEffect(() => {
    fetch('https://big-lapa-api-production.up.railway.app/api/test')
      .then((res) => res.json())
      .then((res) => {
        setState(res)
      })
      .catch((error) => console.log(error))
  }, [])
  console.log(State)

  return <div>useApi</div>
}

export default useApi
