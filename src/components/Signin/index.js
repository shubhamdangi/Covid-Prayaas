import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";
import Sig from "./sig.jpg";
import { signInWithGoogle } from "../../firebase";

export default function Signin() {
  return (
    <div className="signin">
      <Button onClick={signInWithGoogle}>
        <img
          src={Sig}
          alt="."
          style={{
            width: "220px",
            height: "45px",
            borderRadius: "100px",
            border: "3px solid #333333",
          }}
        />
      </Button>
    </div>
  );
}
