let data
const apicall = async () => {
  const response = await fetch(
    'https://6149991107549f001755a471.mockapi.io/employees/employees',
  )
  data = await response.json()
}
apicall()

export default function reducer(state = data, action) {
  const {type, payload} = action
  switch (type) {
    case 'ADDITION':
      return [...data, payload]
    case 'DELETION':
      state.data.filter(item => item.id !== action.payload)
      return state.data

    default:
      return state.data
  }
}
