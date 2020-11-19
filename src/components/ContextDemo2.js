import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ContextDemo2() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      UserContext : {user}, ChannelContext : {channel}
    </div>
  );
}

export default ContextDemo2;
