import axios from "axios";
import { useQuery } from "react-query";
//
const fetchSuperhero = (heroId) => {
  try {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useSingleHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => {
    fetchSuperhero(heroId);
  });
};
