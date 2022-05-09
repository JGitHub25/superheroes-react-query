import { Link } from "react-router-dom";
import { useSuperheroesData } from "../hooks/useSuperheroesData";
//

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
