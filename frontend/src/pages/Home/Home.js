import React from "react";
import Template from "../Template/Template";
import ContentHome from "./components/Content/ContentHome";
import HomeSidebar from "./components/SideBar/HomeSidebar";

function Home() {
  return <Template content={<ContentHome />} sidebar={<HomeSidebar />} />;
}

export default Home;
