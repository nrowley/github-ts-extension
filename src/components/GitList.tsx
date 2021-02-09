import { Flex, Heading } from "@chakra-ui/react";
import { RepeatIcon, SettingsIcon } from "@chakra-ui/icons";
import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import GitPush from "./GitPush";
import { Link } from "react-router-dom";

interface Props {}

export default function GitList({}: Props): ReactElement {
  const [push, setPushes] = useState<any | null>(null);
  useEffect(() => {
    async function getCommits() {
      const res = await fetch(
        `https://api.github.com/users/${localStorage.githubusername}/events`
      );

      var data = await res.json();
      setPushes(data.filter((item) => item.type === "PushEvent"));
    }
    getCommits();
  }, []);
  return (
    <div>
      <Heading size="md" mx="auto" textAlign="center">
        Activity Feed
        <Link to="/">
          <RepeatIcon ml={3} />
        </Link>
      </Heading>
      {push &&
        push?.slice(0, 4).map((commit) => {
          return <GitPush key={commit.id} data={commit} />;
        })}

      {}
    </div>
  );
}
