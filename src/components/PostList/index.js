import "./style.css";
import { useState } from "react";
import Post from "../Post";
import { doc, updateDoc, deleteDoc, setDoc, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
// import { useNavigate } from "react-router-dom";

// Icons
import { Avatar } from "@material-ui/core";

function PostList({
  id,
  title,
  post,
  city,
  state,
  desc,
  completed,
  time,
  name,
  email,
  comments,
  verified,
  site,
}) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });
  const [user, loading, error] = useAuthState(auth);
  const [comment, setComment] = useState();
  //   const navigate = useNavigate();

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };
  const redirect = () => {
    // navigate("/login");
  };
  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, "covid-res", id);
    try {
      await addDoc(taskDocRef, {
        completed: checked,
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleUpdate = async (e) => {
    const taskDocRef = doc(db, "covid-res", id);
    try {
      await updateDoc(taskDocRef, {
        comments: comment,
      });
      setComment("");
    } catch (err) {
      alert(err);
    }
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(db, "covid-res", id);
    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err);
    }
  };

  /* function to update firestore */

  return (
    <div className="post">
      <div className="postTop">
        <div className="postTopInfo">
          <Avatar className="postAvatar" />
          <h3 style={{ marginBottom: "0" }}>
            {email} <br />
            <p
              style={{
                margin: "5 0 -5px 0px",
                paddingTop: "0",
                fontWeight: "normal",
              }}
            >
              {time}
            </p>
          </h3>
        </div>
        {user ? (
          user.email === email ? (
            <div style={{ textAlign: "right" }}>
              <button
                className="button"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleDelete}
                style={{
                  textAlign: "right",
                  border: "none",
                  borderRadius: "50%",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </button>
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>

      <div className="postBottom">
        <span>
          Type of Resource:{" "}
          <b>
            {" "}
            <u>{title}</u>
          </b>
        </span>
      </div>
      <div>
        State: <u>{state}</u>
      </div>
      <div>
        {" "}
        City: <u>{city}</u>{" "}
      </div>

      <div>
        Description: <u>{desc}</u>{" "}
      </div>
      <div>
        Phone: <u>{post}</u>{" "}
      </div>
      <div>Personally Verified: {verified ? "Yes" : "No"}</div>
      {site ? (
        <div>
          Website:{" "}
          <a href={site} target="_blank">
            {site}
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="postImage">
        {/* {postImage ? (
          <img
            src={postImage}
            style={{ borderRadius: "10px" }}
            alt="post-image"
          />
        ) : (
          <></>
        )} */}
      </div>
      {/* <div className="postBottom">
        <p className="post-text">Phone: {post}</p>
      </div> */}
      <hr />
      {comments ? (
        <div className="comment">
          <p style={{ fontSize: "13px" }}>
            <span style={{ fontWeight: "550" }}>
              {user.email.replace("@gmail.com", "")}: {name}
            </span>{" "}
            {comments}
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="postOptions">
        <textarea
          class="form-control center-block container-fluid post__text	"
          id="exampleFormControlTextarea6"
          rows="1"
          column="2"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          style={{
            border: "none",
            // marginBottom: "5px",
            backgroundColor: "#EEEEEE",
          }}
          placeholder="write a review.."
        ></textarea>
        <Button
          onClick={() => {
            user ? handleUpdate() : redirect();
          }}
        >
          post
        </Button>
      </div>
    </div>
  );
}

export default PostList;
