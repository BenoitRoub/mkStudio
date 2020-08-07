import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Search from "./components/Search";
import RecentFolders from "./components/RecentFolders";
import FolderList from "./components/FolderList";

function ContentHome() {
  const classes = useStyles();

  const [search, setSearch] = useState("");

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <RecentFolders search={search} />
      <FolderList search={search} />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {};
});

export default ContentHome;
