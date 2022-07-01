import "./style.css";

function Post({ title, post, postImage }) {
  return (
    <div className="taskItem">
      <h2>{title}</h2>

      <p>{post}</p>
      <hr />
    </div>
  );
}

export default Post;
