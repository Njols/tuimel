import styles from "./post.module.css";

function Post({ postInfo }) {
  return (
    <div className={styles.post}>
      <span className={[styles.title, styles.item].join(" ")}>
        {postInfo.title}
      </span>
      <span className={[styles.author, styles.item].join(" ")}>
        {postInfo.author}
      </span>
    </div>
  );
}

export default Post;
