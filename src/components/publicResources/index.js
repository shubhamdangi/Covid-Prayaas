import "./style.css";
// import PostList from "../PostList";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostList from "../PostList";

function Public() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const navigate = useHistory();

  const handleClick = () => {
    navigate.push("/publish");
  };

  /* function to get all posts from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(db, "covid-res"),
      orderBy("created", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
        setLoading(false)
      );
    });
  }, []);

  return (
    <div className="feed">
      <div>
        <div className="feed-top">
          {/* <Button
            style={{
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px",
              backgroundColor: "#5F6769",
              textTransform: "none",
              // marginLeft: "68%",
              width: "44%",
              border: "2px solid white",
              color: "white",
            }}
            // disabled={!post}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Post quotes or poems honoring our Brave Soldiers
          </Button> */}
        </div>
        {loading ? (
          <CircularProgress style={{ marginLeft: "50%" }} />
        ) : (
          <div>
            {posts.map((task) => (
              <PostList
                id={task.id}
                key={task.id}
                desc={task.data.desc}
                state={task.data.state1}
                city={task.data.city}
                title={task.data.category}
                post={task.data.contact}
                verified={task.data.verified}
                email={task.data.email}
                time={task.data.time}
                comments={task.data.comments}
                site={task.data.website}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Public;
