import { connection } from "../database/db.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res) {
  const { url } = req.body;
  const { id } = req.user;
  const shortUrl = nanoid(8);
  try {
    await connection.query(
      `INSERT INTO urls 
         ("userId", "shortUrl", url) 
        VALUES 
         ($1, $2, $3)`,
      [id, shortUrl, url]
    );

    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function getUrl(req, res) {
  const { id } = req.params;
  try {
    const url = await connection.query(
      `SELECT * FROM urls WHERE urls.id = '${id}'`
    );
    if (!url.rows[0]) {
      return res.status(404).send("URL não encontrada");
    }
    res.status(200).send(url.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}
