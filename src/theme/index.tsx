import React, { FC, ReactNode } from "react";
import Context from "./context";
import Provider from "./provider";

type Props = {
  children: ReactNode;
};

const Theme: FC<Props> = ({ children }) => {
  return (
    <Context>
      <Provider>{children}</Provider>
    </Context>
  );
};

export default Theme;
