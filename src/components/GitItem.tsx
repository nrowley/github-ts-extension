import React, { ReactElement } from "react";

interface Props {
  stuff: string;
}

export default function GitItem({ stuff }: Props): ReactElement {
  return (
    <div>
      <h3>{stuff}</h3>
    </div>
  );
}
