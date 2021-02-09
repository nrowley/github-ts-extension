import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ColorMode from "./ColorMode";

interface Props {}

export default function MenuBar({}: Props): ReactElement {
  return (
    <div>
      <Flex>
        <Box>
          <ColorMode align={"end"} />
        </Box>
        <Spacer />
        {
          <Box mt="5px">
            <Link to="/settings">
              <SettingsIcon w={5} h={5} />
            </Link>
          </Box>
        }
      </Flex>
    </div>
  );
}
