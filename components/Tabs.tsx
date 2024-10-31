import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "풀",
    pokemons: [
      {
        id: 1,
        name: "이상해씨",
        height: 0.7,
        weight: 6.9,
      },
    ],
  },
  {
    name: "불",
    pokemons: [
      {
        id: 4,
        name: "파이리",
        height: 0.6,
        weight: 8.5,
      },
    ],
  },
  {
    name: "물",
    pokemons: [
      {
        id: 7,
        name: "꼬부기",
        height: 0.5,
        weight: 9.0,
      },
    ],
  },
] satisfies PokemonCategory[];

function Tabs() {
  return (
    <div className="flex w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, pokemons }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {pokemons.map((pokemon) => (
                    <li
                      key={pokemon.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {pokemon.name}
                      </a>
                      <ul
                        className="flex gap-2 text-white/50"
                        aria-hidden="true"
                      >
                        <li>{pokemon.height}m</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{pokemon.weight}kg</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

interface PokemonCategory {
  name: string;
  pokemons: Pokemon[];
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export default Tabs;
