import Image from 'next/image'
import Link from 'next/link'

const getPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon').then((res) => res.json())
}

const getPokemon = (url) => {
  return fetch(`${url}`).then((res) => res.json())
}

const Page = async () => {
  const pokemonList = await getPokemons()
  const { results } = pokemonList || {}
  return (
    <div suppressHydrationWarning className="flex justify-center">
      <div className="grid grid-cols-4 gap-x-20">
        {results.map(async ({ name, url }) => {
          const pokemon = await getPokemon(url)
          const { id, sprites } = pokemon || {}
          const { front_shiny } = sprites || {}
          return (
            <div key={id} className="mb-10">
              <div className=" bg-slate-100 rounded-full p-8 shadow-2xl">
                <h3 className="text-center mt-2">{name}</h3>
                <Link href={`/pokemons/${id}`}>
                  <Image
                    width={130}
                    height={130}
                    alt="not found"
                    src={`${front_shiny}`}
                  ></Image>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
