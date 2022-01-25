import React, { useEffect } from "react";
import Feed from "../Feed";

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
