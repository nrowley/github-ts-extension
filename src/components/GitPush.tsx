import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { title } from "process";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}

export default function GitItem({ data }: Props): ReactElement {
  const push_ref = data.payload.ref.replace("refs/heads/", "");

  const dt = new Date(data.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let avatar = data.actor.avatar_url;
  let commits = data.payload.commits;

  return (
    <div>
      <Box
        key={data.id}
        maxW="400px"
        w="100%"
        mt="5"
        padding="5"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          maxW="400px"
          w="100%"
          mt="5"
          textAlign="left"
          fontWeight="normal"
          as="h4"
          my="auto"
        >
          <Grid templateColumns="repeat(1,1fr)">
            <GridItem colStart={0}>
              <Box>
                <List spacing={3}>
                  {commits.map((commit) => (
                    <>
                      <ListItem>
                        <Text fontSize="sm" noOfLines={1}>
                          <Avatar mr={2} w={6} h={6} shadow={4} src={avatar} />
                          <AddIcon w={2} h={2} mr="1" color="green.300" />
                          {commit.message}
                        </Text>
                        <Text fontSize="xs" ml="10" color="grey">
                          {push_ref}
                        </Text>
                      </ListItem>
                    </>
                  ))}
                </List>
              </Box>
            </GridItem>
            <GridItem colEnd={5}>
              <Box>
                <Text color="grey" fontSize="sm">
                  {dt}
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
