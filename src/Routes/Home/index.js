import React from "react";
import {
    Header,
    Blank,
    Speech,
    UpcomingEvents,
    WhatNext,
  } from "../../components/index";

const Home = () => {
  return (
    <>
      <Header />
      <Speech />
      <Blank />
      <UpcomingEvents />
      <WhatNext />
    </>
  );
};

export default Home;
