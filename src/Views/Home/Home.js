// display the customTopBar
//go to the component for more details

import React from "react";
import CustomTopBar from "../../Components/TopBar/CustomTopBar";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";

function Home() {
  return <CustomTopBar />;
}

export default Home;
