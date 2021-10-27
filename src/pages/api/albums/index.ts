// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Album } from '../../../../models/types';
import { albums } from '../../../../data/albums';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Album[]>
) {
  const { page, search_term = "" } = req.query
  const limit = 10;
  const firstIndex = 0 
  const lastIndex = (Number(page)) * limit;

  const foundAlbums = albums.filter((album : Album) => {
    if(album.artist.toUpperCase().indexOf(search_term.toString().toUpperCase()) !== -1){
      return album
    } 
  })

  if(!page){
    res.status(200).json(foundAlbums);
  } else {
    const paginatedFoundAlbums = foundAlbums.slice(firstIndex, lastIndex)
    res.status(200).json(paginatedFoundAlbums);
  }
 
}
