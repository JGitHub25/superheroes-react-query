import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useSingleHeroData } from "../hooks/useSingleHeroData";

const fetchSuperhero = async (prop) => {
  console.log(prop);
  const [_key, x] = prop.queryKey;
  console.log(x);

  const response = await fetch(`http://localhost:4000/superheroes/${x.todoId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();

  // try {
  //   const { data } = await axios.get(`http://localhost:4000/superheroes/${x}`);
  //   return data;
  // } catch (error) {
  //   console.log(error.message);
  //   throw error;
  // }
};

const fnFetch = async ({ queryKey }) => {
  const [_key, { todoId, page }] = queryKey;

  const response = await fetch(`http://localhost:4000/superheroes/${todoId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const SingleHeroPage = () => {
  const { heroId } = useParams();
  const todoId = heroId;
  const { data, isLoading, isSuccess } = useSingleHeroData(heroId);

  // useQuery(["todos", { todoId, page: 563 }], fetchSuperhero);

  // useQuery(["todos", { todoId, page: 563 }], fnFetch);

  //   if (isLoading) {
  //     return <h2>Loading...</h2>;
  //   }

  // if (query) {
  //   console.log(query);
  // }

  return (
    <>
      <h1>Single hero {heroId}</h1>
    </>
  );
};

export default SingleHeroPage;
