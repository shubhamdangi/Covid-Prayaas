import React, { useEffect } from "react";
import Feed from "../feed";

function Home() {
  useEffect(() => {
    document.title = "Covid Prayaas | Home";
  }, []);

  return (
    <>
      <Feed />
    </>
  );
}

export default Home;
