import * as React from "react";
import * as ReactDOM from "react-dom";
import { add } from "./rust/add.rs";

import { Button, Basic } from "../dist";

ReactDOM.render(
  <Basic>
    <Button>{add(3, 5)}</Button>
  </Basic>,
  document.getElementById("root")
);
