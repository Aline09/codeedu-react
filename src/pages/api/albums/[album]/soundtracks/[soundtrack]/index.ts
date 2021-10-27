// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Soundtrack } from '../../../../../../../models/types';
import { soundtracks } from '../../../../../../../data/soundtracks';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Soundtrack>
) {
  const { album: albumId, soundtrack: soundtrackId } = req.query;

  //Verify if the album exists

  const soundtrack = soundtracks.find(
    (soundtrack: Soundtrack) =>
      soundtrack.album_id === albumId && soundtrack.id === soundtrackId
  );

  if (soundtrack) {
    res.status(200).json(soundtrack);
  } else {
    res.status(400).end();
  }
}
