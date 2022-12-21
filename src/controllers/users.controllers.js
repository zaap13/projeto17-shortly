import { connection } from "../database/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/auth.service.js";

export async function postUser(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(409).send("Passwords not match");
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await connection.query(
      `INSERT INTO users 
       (name, email, password, "confirmPassword") 
      VALUES 
       ($1, $2, $3, $4)`,
      [name, email, hashPassword, hashPassword]
    );

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function logIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await connection.query(
      `SELECT * FROM users WHERE users.email = '${email}'`
    );
    if (!user.rows[0]) {
      return res.status(404).send("Usuário não cadastrado");
    }

    const passwordOk = bcrypt.compareSync(password, user.rows[0].password);

    if (!passwordOk) {
      return res.sendStatus(401);
    }

    const token = generateToken(user.rows[0].id);

    console.log(token);

    res.status(201).send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getUser(req, res) {
  const { id } = req.user;

  try {
    const user = await connection.query(
      `SELECT users.name, users.id, SUM(urls."visitCount") as "visitCount" FROM users JOIN urls ON urls."userId" = '${id}' WHERE users.id = '${id}' GROUP BY users.id`
    );

    if (!user.rows[0]) {
      return res.status(404).send("Usuário não encontrado");
    }

    const shortenedUrls = await connection.query(
      `SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE urls."userId" = '${id}' ORDER BY id`
    );

    const response = {
      id: user.rows[0].id,
      name: user.rows[0].name,
      visitCount: user.rows[0].visitCount,
      shortenedUrls: shortenedUrls.rows,
    };

    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}
