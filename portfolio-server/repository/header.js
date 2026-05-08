import db from "../db/connection.js";

export const getHeader = async () => {
  const sql = ` select header from portfolio `;
  const [result] = await db.execute(sql, []);

  return await result[0].header;
};
