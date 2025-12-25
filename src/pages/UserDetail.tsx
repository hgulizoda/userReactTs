import {
  Avatar,
  Box,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Divider,
} from "@mantine/core";
import { IconMail, IconPhone, IconWorld } from "@tabler/icons-react";
import type { IUserCard } from "../types/tUserCard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import API from "../utils/api";

export default function UserDetail() {
  const { userId } = useParams();
  const { data: props } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await API.get<IUserCard>(`/users/${userId}`);
      return res.data;
    },
  });

  return (
    <Box className="container" mx="auto" p="md">
      <Group mb="xl" mt={60}>
        <Avatar size={72} radius="xl">
          {props?.name.charAt(0)}
        </Avatar>

        <Stack gap={2}>
          <Title order={3}>{props?.name}</Title>
          <Text c="dimmed">@{props?.username}</Text>
        </Stack>
      </Group>

      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Title order={5} mb="sm" fz={"h3"}>
              Contact
            </Title>

            <Stack gap="md">
              <Group gap="xs">
                <IconMail size={16} />
                <Text size="sm">{props?.email}</Text>
              </Group>

              <Group gap="xs">
                <IconPhone size={16} />
                <Text size="sm">{props?.phone}</Text>
              </Group>

              <Group gap="xs">
                <IconWorld size={16} />
                <Text size="sm">{props?.website}</Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Title order={5} mb="sm" fz={"h3"}>
              Address
            </Title>

            <Stack gap={"md"}>
              <Text size="sm">{props?.address.street}</Text>
              <Text size="sm">{props?.address.suite}</Text>
              <Text size="sm">
                {props?.address.city}, {props?.address.zipcode}
              </Text>

              <Divider my="xs" />

              <Text size="xs" c="dimmed">
                Lat: {props?.address.geo.lat}, Lng: {props?.address.geo.lng}
              </Text>
            </Stack>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder radius="md" p="xl">
            <Title order={5} mb="sm" fz={"h3"}>
              Company
            </Title>

            <Stack gap={"md"}>
              <Text fw={500}>{props?.company.name}</Text>
              <Text size="sm" fs="italic">
                “{props?.company.catchPhrase}”
              </Text>
              <Text size="xs" c="dimmed">
                {props?.company.bs}
              </Text>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
