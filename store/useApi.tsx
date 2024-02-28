import axios from 'axios';
import { create } from 'zustand';

interface Pokemon {
  id: number;
  sprites: any;
  name: string;
  stats: any[];
}

interface PokemonStore {
  allPokemons: Pokemon[];
  loading: boolean;
  currentPage: number;
  postPerPage: number;
  totalPokemon: number;
  offset: number;
  detailPokemon: any;
  prevPage: () => void;
  nextPage: () => void;
  setLoading: (load: boolean) => void;
  getAllPokemons: (next: number) => Promise<void>;
  getDetailPokemons: (id: number) => Promise<void>;
  setDetailPokemons: (data: any) => void;
}

const useApi = create<PokemonStore>((set, get) => ({
  detailPokemon: {},
  allPokemons: [],
  loading: true,
  currentPage: 1,
  postPerPage: 9,
  offset: 9,
  totalPokemon: 0,
  setLoading: (load: boolean) => set({ loading: load }),
  getAllPokemons: async (next: number) => {
    const URL = process.env.API_URL;
    const { postPerPage } = get();
    try {
      const loadMore = `${URL}/pokemon/?offset=${next}&limit=${postPerPage}`;
      const { data } = await axios.get(loadMore);

      const pokemonDataArray = await Promise.all(
        data.results.map(async (pokemon: Pokemon) => {
          const response = await axios.get(`${URL}/pokemon/${pokemon.name}`);
          return response.data as Pokemon;
        }),
      );
      set({ loading: true });
      set({ totalPokemon: data.count });
      set((state) => ({ allPokemons: [...pokemonDataArray] }));
      set({ loading: false });
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
      set({ loading: true });
    }
  },
  prevPage: () => {
    const { offset } = get();
    set({ offset: offset - 9 });
    get().getAllPokemons(offset);
    if (offset === 0) {
      set({ offset: 0 });
    }
  },
  nextPage: () => {
    const { offset, totalPokemon, postPerPage } = get();
    const lastPage = Math.ceil(totalPokemon / postPerPage);
    set({ offset: offset + 9 });
    get().getAllPokemons(offset);
    if (offset > lastPage) {
      set({ offset: lastPage });
    }
  },
  getDetailPokemons: async (id: number) => {
    const URL = process.env.API_URL;
    const response = await axios.get(`${URL}/pokemon/${id}`);
    return response.data;
  },
  setDetailPokemons: (data: any) => {
    set({ detailPokemon: data });
  },
}));

export default useApi;
