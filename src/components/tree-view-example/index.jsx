import React from "react";
import Menulist from "./menu-list";
function TreeExample({ data }) {
  return <div>{<Menulist list={data} />}</div>;
}

export default TreeExample;
