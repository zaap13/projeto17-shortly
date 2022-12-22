import { connection } from "../database/db.js";

export function insertUser(name, email, hashPassword) {
  return connection.query(
    `INSERT INTO users 
         (name, email, password, "confirmPassword") 
        VALUES 
         ($1, $2, $3, $4)`,
    [name, email, hashPassword, hashPassword]
  );
}

export function selectUser(email) {
  return connection.query(`SELECT * FROM users WHERE users.email = '${email}'`);
}

export function selectUserMe(id) {
  return connection.query(
    `SELECT users.name, users.id, SUM(urls."visitCount") as "visitCount" 
        FROM users JOIN urls 
        ON urls."userId" = '${id}' 
        WHERE users.id = '${id}' 
        GROUP BY users.id`
  );
}

export function selectShortUrl(id) {
  return connection.query(
    `SELECT id, "shortUrl", url, "visitCount" 
        FROM urls 
        WHERE urls."userId" = '${id}' ORDER BY id`
  );
}

export function selectRanking() {
  return connection.query(
    `SELECT users.id, users.name, SUM(urls."visitCount") as "visitCount", COUNT(urls.id) as "linksCount" 
        FROM users JOIN urls 
        ON urls."userId" = users.id 
        GROUP BY users.id 
        ORDER BY "visitCount" 
        DESC LIMIT 10;`
  );
}
