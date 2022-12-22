import { connection } from "../database/db.js";

export function insertUrl(id, shortUrl, url) {
  return connection.query(
    `INSERT INTO urls 
           ("userId", "shortUrl", url) 
          VALUES 
           ($1, $2, $3)`,
    [id, shortUrl, url]
  );
}

export function selectUrl(id) {
  return connection.query(`SELECT * FROM urls WHERE urls.id = '${id}'`);
}

export function selectShortUrl(shortUrl) {
  return connection.query(
    `SELECT url FROM urls WHERE urls."shortUrl" = '${shortUrl}'`
  );
}

export function updateVisit(shortUrl) {
  return connection.query(
    `UPDATE urls SET "visitCount" = "visitCount"+1 WHERE urls."shortUrl" = '${shortUrl}'`
  );
}

export function selectUserId(id) {
  return connection.query(`SELECT "userId" from urls WHERE urls.id = '${id}'`);
}

export function deleteUrlId(id) {
  return connection.query(`DELETE FROM urls WHERE urls.id = '${id}'`);
}
