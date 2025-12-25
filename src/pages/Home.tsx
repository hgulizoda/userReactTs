import { useQuery } from "@tanstack/react-query";
import UserCard from "../components/userCard";
import API from "../utils/api";
import type { IUserCard } from "../types/tUserCard";
import { Button, Flex, Grid, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

type UsersArray = IUserCard[];

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<UsersArray>([]);

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await API.get<UsersArray>("/users");
      return res.data;
    },
  });

  useEffect(() => {
    const newArray = data?.filter(
      (user) =>
        user.name.toLowerCase().includes(search?.toLowerCase()) ||
        user.username.toLowerCase().includes(search?.toLowerCase())
    );
    setFiltered(newArray);
  }, [search, data]);

  return (
    <div className="container">
      <Flex>
        <Flex gap={10}>
          <TextInput
            mb={20}
            value={search ? search : ""}
            onChange={(e) => setSearch(e.target.value)}
            w={300}
            placeholder="search with username or name"
          />
          <Button bg={"gray"}>
            <IconSearch />
          </Button>
        </Flex>
      </Flex>
      <Grid>
        {search
          ? filtered?.map((user: IUserCard) => (
              <Grid.Col span={3} key={user.id}>
                <UserCard {...user} />
              </Grid.Col>
            ))
          : data?.map((user: IUserCard) => (
              <Grid.Col span={3} key={user.id}>
                <UserCard {...user} />
              </Grid.Col>
            ))}
      </Grid>
    </div>
  );
};

export default Home;
