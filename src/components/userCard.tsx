import { Card, Image, Stack, Text } from "@mantine/core";
import type { IUserCard } from "../types/tUserCard";
import { Link } from "react-router-dom";

const UserCard = (props: IUserCard) => {
  return (
    <Card
      maw={300}
      pt={20}
      pb={50}
      component={Link}
      to={`/user/${props.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image
        src="https://safri.org/wp-content/uploads/2023/03/man-avatar-icon-flat-vector-19152370-1.jpg"
        radius="50%"
        w="100"
        my={20}
      />
      <Stack gap={0}>
        <Text fz={"h5"} fw={800}>
          {props.name}
        </Text>
        <Text fw={600} fz={"h5"}>
          {props.username}
        </Text>
        <Text fz={"h6"}>{props.email}</Text>
      </Stack>
    </Card>
  );
};

export default UserCard;
