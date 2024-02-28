// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=d169b4e88b2b76000b8950d5f7e46a76

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  const path = req.query.path as string;
  await res.revalidate(path);

  return res.json({ revalidated: true });
}
