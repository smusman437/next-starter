import db from "../../../db/DB_connection";

export default async function handler(req, res) {
    console.log("req.method:",req.method);
  let id, data;
  switch (req.method) {
    case "GET":
      id = req.query.id;
      await db.connect();
      data = await db.query(`select * from todo where id = ${id}`);
      await db.end();
      return res.status(200).send(data[0]);
    case "DELETE":
      id = req.query.id;
      console.log("id:",id);
      await db.connect();
      data = await db.query(`DELETE FROM todo where id = ${id}`);
      console.log("data:",data);
      await db.end();
      return res.status(200).send({ success: true });
  }
  res.status(200).json({ name: "John Doe" });
}
