import { MoonIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons";
import {
  Stack,
  FormLabel,
  Switch,
  useColorMode,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {
  align: String;
}

export default function ColorMode({ align }: Props): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="flex-start" justify="flex-start">
        <Box mt="10px" ml="10px">
          <Stack direction="row">
            <FormLabel htmlFor="colorswitch">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </FormLabel>
            <Switch
              name="colorswitch"
              colorScheme="green"
              size="md"
              onChange={toggleColorMode}
            />
          </Stack>
        </Box>
      </Flex>
    </div>
  );
}
