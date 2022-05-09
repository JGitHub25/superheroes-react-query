import axios from "axios";
import { useQuery } from "react-query";
//
const fetchSuperheroes = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/superheroes");
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useSuperheroesData = (enabled = true) => {
  return useQuery("super-heroes", fetchSuperheroes, {
    enabled,
  });
};
