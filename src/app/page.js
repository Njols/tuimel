import styles from "./page.module.css";
import Collection from "./collection";
import Dinglebon from "./bingle.json";
import React from "react";

export default function Home() {
  return (
    <div className={styles.main}>
      {Dinglebon.Groups.map((group) => (
        <Collection collectionInfo={group} key={group.id} />
      ))}
      {/* <h2>{JSON.parse(Groups)}</h2> */}
    </div>
  );
}
