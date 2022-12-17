// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from "../../../db/DB_connection";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await db.connect();
      const data = await db.query("select * from todo");
      await db.end();
      return res.status(200).send(data);
    case "POST":
      const { title, isComplete } = req.body;

      await db.connect();
      var sql = `INSERT INTO todo (title,isComplete) VALUES ('${title}',${isComplete})`;
      await db.query(sql);
      await db.end();

      return res.status(200).send({ success: true });
  }
  res.status(200).json({ name: "John Doe" });
}
