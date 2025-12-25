import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/userCard";
import API from "../utils/api";
import type { IUserCard } from "../types/tUserCard";
import { Grid } from "@mantine/core";

type UsersArray = IUserCard[];

const Home = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await API.get<UsersArray>("/users");
      return res.data;
    },
  });

  console.log(data);

  return (
    <div className="container">
      <Grid>
        {data?.map((user: IUserCard) => (
          <Grid.Col span={3}>
            <UserCard key={user.id} {...user} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
