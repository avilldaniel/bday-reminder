import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.hello.useQuery({ text: "tRPC" });

  if (!hello.data) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.container}>
      <p>{hello.data.greeting}</p>
    </div>
  );
};

export default Home;
