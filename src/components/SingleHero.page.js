import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSingleHeroData } from "../hooks/useSingleHeroData";

const fetchSuperhero = (queryKey) => {
  console.log(queryKey);

  return axios.get(`http://localhost:400/superheroes/`);
};

export const SingleHeroPage = () => {
  const { heroId } = useParams();
  //   const { data, isLoading, isSuccess } = useSingleHeroData(heroId);

  const query = useQuery(["super-hero", heroId], () => {
    fetchSuperhero(heroId);
  });

  //   if (isLoading) {
  //     return <h2>Loading...</h2>;
  //   }

  if (query) {
    console.log(query);
  }

  return (
    <>
      <h1>Single hero {heroId}</h1>
    </>
  );
};
