import axios from "axios";

const PokemonAPI = (() => {
  const base_url = "https://api.pokemontcg.io/v2/cards/";

  const GetPokemon = async () => {
    try {
      const response = await axios.get(base_url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const GetPokemonId = async (id) => {
    try {
      const response = await axios.get(`${base_url}${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    GetPokemon,
    GetPokemonId,
  };
})();

export default PokemonAPI;
