import Image from 'next/image'

const getPokemonId = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
    res.json()
  )
}

const page = async ({ params }) => {
  const pokemonId = await getPokemonId(params.id)
  const { name, height, weight, sprites } = pokemonId || {}
  const { other } = sprites || {}
  return (
    <div className="flex justify-center">
      <div>
        <Image
          alt="not found"
          width={400}
          height={400}
          src={other.dream_world.front_default}
        ></Image>
      </div>
      <div>
        <h2>Name: {name}</h2>
        <h4>Height: {height}</h4>
        <h4>Weight: {weight}</h4>
      </div>
    </div>
  )
}

export default page
