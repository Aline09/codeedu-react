// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { soundtracks } from "../../../../../../data/soundtracks";

import { Soundtrack } from "../../../../../../models/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Soundtrack[]>
) {
  const { album: albumId } = req.query;

  //Verify if the album exists

  

  const soundtracksList = soundtracks.filter(
    (soundtrack: Soundtrack) => soundtrack.album_id === albumId
  );

  if (soundtracksList.length) {
    res.status(200).json(soundtracksList);
  } else {
    res.status(204).end();
  }
}
