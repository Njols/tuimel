import styles from "./collection.module.css";
import Post from "./post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonFalling } from "@fortawesome/free-solid-svg-icons";

function Collection({ collectionInfo }) {
  return (
    <div className={styles["collection-container"]}>
      <div className={styles["title-column"]}>
        <span className={styles.title}>
          <span className={styles["icon"]}>
            {collectionInfo.type == "poetry-collection" && (
              <FontAwesomeIcon
                icon={faPersonFalling}
                className="fa-solid fa-person-falling"
              />
            )}
          </span>
          {collectionInfo.title}
        </span>
        <span className={styles.date}>
          ({new Date(collectionInfo.date).toLocaleDateString("nl")})
        </span>
        {collectionInfo.items.length >= 4 && (
          <div className={styles["cover-image"]}></div>
        )}
      </div>
      <div className={styles["post-column"]}>
        {collectionInfo.items.map((post) => (
          <Post postInfo={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
