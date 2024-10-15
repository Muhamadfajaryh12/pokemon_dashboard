import axios from "axios";

const RarityAPI = (() => {
  const GetRarity = async () => {
    try {
      const response = await axios.get("https://api.pokemontcg.io/v2/rarities");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    GetRarity,
  };
})();

export default RarityAPI;
