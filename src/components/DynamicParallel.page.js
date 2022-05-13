import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperhero = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/superheroes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DynamicParallel = ({ heroIds }) => {
  const heroesQueries = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["hero", heroId],
        queryFn: () => fetchSuperhero(heroId),
      };
    })
  );
  console.log({ heroesQueries });
  return <h1>Dynamic</h1>;
};
