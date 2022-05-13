import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperhero = async ({ queryKey }) => {
  const id = queryKey[1];
  try {
    const { data } = await axios.get(`http://localhost:4000/superheroes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchPowers = async ({ queryKey }) => {
  const id = queryKey[1];
  console.log(id);
  try {
    const { data } = await axios.get(
      `http://localhost:4000/superheroes-powers/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DependentQueries = ({ id }) => {
  // Get the hero
  const { data: hero } = useQuery(["hero", id], fetchSuperhero);

  const heroId = hero?.id;

  // Then get the hero's projects
  const { isIdle, data: projects } = useQuery(["powers", heroId], fetchPowers, {
    // The query will not execute until the heroId exists
    enabled: !!heroId,
  });

  // isIdle will be `true` until `enabled` is true and the query begins to fetch.
  // It will then go to the `isLoading` stage and hopefully the `isSuccess` stage :)

  return <h1>Dependent Queries</h1>;
};
