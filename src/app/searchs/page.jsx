import Select from '../../../Components/Select'

const getTypes = () => {
  return fetch('https://pokeapi.co/api/v2/type').then((res) => res.json())
}

const page = async () => {
  const typesList = await getTypes()
  const { results } = typesList || {}
  return (
    <div>
      <Select results={results} />
    </div>
  )
}

export default page
