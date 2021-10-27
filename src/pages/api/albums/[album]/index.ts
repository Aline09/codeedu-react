// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Album } from "../../../../../models/types";
import { albums } from "../../../../../data/albums";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Album>
) {
  
  const { album: albumId } = req.query;
  //Verify if the album exists

  const album = albums.find((album: Album) => album.id === albumId);

  if (album) {
    res.status(200).json(album);
  } else {
    res.status(400).end();
  }
}
