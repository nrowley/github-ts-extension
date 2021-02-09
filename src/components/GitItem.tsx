import {
  AddIcon,
  ArrowForwardIcon,
  CheckCircleIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import {
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

interface Props {
  stuff: any;
}

export default function GitItem({ stuff }: Props): ReactElement {
  console.log(stuff);

  const dt = new Date(stuff.created_at).toLocaleTimeString();

  let commits = stuff.payload.commits;

  const combineCommits = (arr): string => {
    let outStr: string = "";
    console.log(arr);
    for (let msg of arr) {
      outStr += msg.message + "";
    }

    return outStr.substring(0, outStr.length - 1);
  };

  return (
    <div>
      <Box
        id={stuff.id}
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
          fontWeight="semibold"
          as="h4"
        >
          <Grid templateColumns="repeat(2,1fr)">
            <GridItem colStart={0}>
              <Box>
                <List spacing={3}>
                  {commits.map((commit) => (
                    <>
                      <ListItem>
                        <ArrowForwardIcon w={3} h={3} mr="2" color="grey" />
                        {commit.message}
                      </ListItem>
                    </>
                  ))}
                </List>
              </Box>
            </GridItem>
            <GridItem colEnd={4}>
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
