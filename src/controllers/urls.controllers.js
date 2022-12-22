import { connection } from "../database/db.js";
import { nanoid } from "nanoid";
import {
  deleteUrlId,
  insertUrl,
  selectShortUrl,
  selectUrl,
  selectUserId,
  updateVisit,
} from "../repositories/urls.repositories.js";

export async function postUrl(req, res) {
  const { url } = req.body;
  const { id } = req.user;
  const shortUrl = nanoid(8);
  try {
    await insertUrl(id, shortUrl, url);

    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function getUrl(req, res) {
  const { id } = req.params;
  try {
    const url = await selectUrl(id);
    if (!url.rows[0]) {
      return res.status(404).send("URL não encontrada");
    }
    res.status(200).send(url.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function openUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const url = await selectShortUrl(shortUrl);
    if (!url.rows[0]) {
      return res.status(404).send("URL não encontrada");
    }
    await updateVisit(shortUrl);
    res.redirect(301, url.rows[0].url);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}

export async function deleteUrl(req, res) {
  const { id } = req.params;
  const user = req.user;

  try {
    const userId = await selectUserId(id);
    if (!userId.rows[0]) {
      return res.sendStatus(404);
    }
    if (userId.rows[0].userId !== user.id) {
      return res.sendStatus(401);
    }
    await deleteUrlId(id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.detail);
  }
}
