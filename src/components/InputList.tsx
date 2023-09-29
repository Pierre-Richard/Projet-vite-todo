import React from "react";

interface PropsInputList {
  list: {
    input: string;
  }[];
}

export const InputList = ({ list }: PropsInputList) => {
  return (
    <>
      <ul>
        {list.map((l, index) => (
          <li key={index}>{l.input}</li>
        ))}
      </ul>
    </>
  );
};
