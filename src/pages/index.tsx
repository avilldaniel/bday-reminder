import type { NextPage } from "next";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [friend, setFriend] = useState({
    name: "",
    birthday: undefined,
  });

  // const [bday, setBday] = useState(new Date());
  const [bday, setBday] = useState<Date | null>(null);

  // testing
  useEffect(() => {
    console.log(friend);
    console.log(bday);
  }, [friend, bday]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // setting name
    if (name === "name") {
      return setFriend((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const hello = trpc.hello.useQuery({ text: "tRPC" });

  if (!hello.data) {
    return <div>loading</div>;
  }

  return (
    <div className={styles.container}>
      {/* <p>{hello.data.greeting}</p> */}
      <form>
        <label>
          Friend{`'`}s name
          <input
            name="name"
            value={friend.name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            required
          />
        </label>

        {/* use date picker */}
        {/* <input name="birthday" value={friend.birthday} onChange={handleChange} placeholder="Birthday" type="text" required /> */}
      </form>
    </div>
  );
};

export default Home;
