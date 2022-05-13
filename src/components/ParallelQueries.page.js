import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = async () => {
  const { data } = await axios("http://localhost:4000/superheroes");
  return data;
};

const fetchFriends = async () => {
  const { data } = await axios("http://localhost:4000/friends");
  return data;
};

export const ParallelQueries = () => {
  const { data: superHeroes, isSuccess: isHeroesSuccess } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );
  const { data: friends, isSuccess: isFriendsSuccess } = useQuery(
    "friends",
    fetchFriends
  );

  return (
    <>
      <h1>Parallel Queries</h1>
      {isFriendsSuccess && friends.map((friend) => <div>{friend.name}</div>)}
      {isHeroesSuccess && superHeroes.map((hero) => <div>{hero.name}</div>)}
    </>
  );
};
