//https://your-site.com/api/revalidate?secret=<token>
//http://localhost:3000/api/revalidate?path=/&secret=bf2a3b5f81e56dcfe7e73a4fdcac7d34

import { NextApiRequest, NextApiResponse } from "next";
import { env } from "process";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid Token!" });
  }
  const path = req.query.path as string;

  await res.revalidate(path);

  return res.json({ revalidated: true });
}
