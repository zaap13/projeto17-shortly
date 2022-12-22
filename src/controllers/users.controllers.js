import bcrypt from "bcrypt";
import { generateToken } from "../services/auth.service.js";
import {
  insertUser,
  selectRanking,
  selectShortUrl,
  selectUser,
  selectUserMe,
} from "../repositories/users.repositories.js";

export async function postUser(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(409).send("Passwords not match");
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await insertUser(name, email, hashPassword);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function logIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await selectUser(email);
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
    const user = await selectUserMe(id);

    if (!user.rows[0]) {
      return res.status(404).send("Usuário não encontrado");
    }

    const shortenedUrls = await selectShortUrl(id);

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

export async function getRanking(req, res) {
  try {
    const ranking = await selectRanking();
    res.send(ranking.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}
