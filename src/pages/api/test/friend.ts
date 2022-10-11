import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

type Data = {
  msg: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, birthday } = req.body;
  try {
    const friend = await prisma.friend.create({
      data: {
        name,
        birthday,
      },
    });
    console.log({ friend });
    return res.status(123).send({ msg: "idk yet" });
  } catch (e) {
    console.error(e);
  }
};

export default handler;
