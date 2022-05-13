import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const fetchSuperhero = async (id) => {
  console.log(id);
  try {
    const { data } = await axios.get(`http://localhost:4000/superheroes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useSingleHeroData = (queryId) => {
  return useQuery(["super-hero", queryId], () => fetchSuperhero(queryId));
};

const SingleHeroPage = () => {
  const { heroId } = useParams();
  const { data, isLoading, isError } = useSingleHeroData(heroId);

  return (
    <>
      <h1>Single hero {heroId}</h1>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Error"
      ) : (
        <div>{`Yo soy ${data.name}`}</div>
      )}

      <Link to="/rq-super-heroes">Back</Link>
    </>
  );
};

export default SingleHeroPage;
