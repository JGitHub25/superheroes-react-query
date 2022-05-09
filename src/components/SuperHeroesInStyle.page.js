import { useSuperheroesData } from "../hooks/useSuperheroesData";

export const SuperHeroesInStyle = () => {
  const { data, isLoading, isError, error, isFetching, isFetched, refetch } =
    useSuperheroesData(false);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Stylish</h2>
      <button onClick={refetch}>Bring those stylish mfs!!!</button>
      {isFetched &&
        data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
    </>
  );
};
