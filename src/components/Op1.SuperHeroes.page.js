import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

//
//VERSIONES POSIBLES DE LA FETCHER FUNCTION
// const fetchSuperheroes = async () => {
//   const { data } = await axios.get("http://localhost:4000/superheroess");
//   return data;
// };

// const fetchSuperheroes = async () => {
//   const res = await fetch("http://localhost:4000/superheroes");
//   return res.json();
// };

// const fetchSuperheroes = async () => {
//   try {
//     const res = await fetch("http://localhost:4000/superheroes");
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };
const fetchSuperheroes = async () => {
  try {
    const { data } = await axios("http://localhost:4000/superheroes");
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
// const fetchSuperheroes = async () => {
//   const res = await fetch("http://localhost:4000/superheroes");
//   if (!res.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return res.json();
// };

//Esta funciona pero hay que leerla data.data
// const fetchSuperheroes = () => {
//   try {
//     return axios("http://localhost:4000/superheroes");
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

export const useSuperheroesData = (enabled = true) => {
  return useQuery("super-heroes", fetchSuperheroes, {
    enabled,
  });
};

export const RQSuperHeroesPage = () => {
  // Access the client?????????

  const { data, isLoading, isSuccess, isError, error, isFetching, refetch } =
    useSuperheroesData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Get me them heroes again!</button>
      {isSuccess &&
        data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
    </>
  );
};
//----------------------------------------
// const x = () =>
//   axios
//     .get("https://api.github.com/repos/tannerlinsley/react-query")
//     .then((res) => res.data);

//     async () => {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       return data;
//     };

//     const getPosts = async () => {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       return data;
//     };

//     const getPostById = async (postId) => {
//       const { data } = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//       );
//       return data;
//     };

//     export default function usePost(postId) {
//       return useQuery(["post", postId], () => getPostById(postId));
//     }
