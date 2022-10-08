import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => {
  return (
    <Head>
      <title>B-day Reminder</title>
      <meta name="description" content="Never forget a birthday!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
