import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "todo-list.crg1mmaatl0h.us-east-1.rds.amazonaws.com",
    port: "3306",
    database: "todo-list",
    user: "admin",
    password: "admin123",
  },
});

export default db;
