import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import GitItem from "./GitItem";

interface Props {}

export default function GitList({}: Props): ReactElement {
  const [commits, setCommits] = useState<string[] | null>(null);
  useEffect(() => {
    async function getCommits() {
      const res = await fetch(`https://api.github.com/users/nrowley/events`);

      var data = await res.json();
      setCommits(data.filter((item) => item.type === "PushEvent"));
    }
    getCommits();
  }, []);
  return (
    <div>
      <h3>this is the gitlist</h3>
      {commits &&
        commits?.map((commit) => {
          return <GitItem stuff={commit} />;
        })}
    </div>
  );
}
