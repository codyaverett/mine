import * as React from "react";
import { StylesProvider } from "@material-ui/core/styles";

export const Basic: React.FunctionComponent = ({ children }) => (
  <StylesProvider injectFirst>{children}</StylesProvider>
);
