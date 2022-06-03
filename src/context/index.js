import React from 'react'

const apicall = async () => {
  const response = await fetch(
    'https://6149991107549f001755a471.mockapi.io/employees/employees',
  )
  const apiData = await response.json()
  return apiData
}

const ApiContext = React.createContext({
  APIarray: apicall(),
  addDetails: () => {},
  deleteDetails: () => {},
})

export default ApiContext
