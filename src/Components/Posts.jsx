// import "./posts.css";
import styles from "./Posts.module.css";
import Post from "./Post";
const Posts = () => {
  const posts = ["post1", "post2", "post3"];
  return (
    <div className={`${styles.container}`}>
      <h1>List of posts</h1>
      <ul>
        {posts.map((post,index) => (
          <Post key={index} post={post} />
        ))}
      </ul>
    </div>
  );
};
export default Posts;
