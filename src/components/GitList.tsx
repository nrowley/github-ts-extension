import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { ReactElement, useState } from "react";
import GitItem from "./GitItem";

interface Props {}

export default function GitList({}: Props): ReactElement {
  return (
    <div>
      {fetch("api.github.com/users/nrowley/events")
        .then((res) => res.json())
        .then((data) => console.log(data))}
    </div>
  );
}
