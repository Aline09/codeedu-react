export type Soundtrack = {
  id: string,
  album_id: string,
  name: string,
  minutes: number
  artist?: string
}

export type Album = {
  id: string,
  name: string,
  artist: string,
  created_at: string
}

export type AlbumWithSoundtracks = Album & {soundtracks : Soundtrack[]}

export type SearchLog = {
  ip: string,
  date: Date,
  search_term: string | string[]
}

export type PlayingSoundtrack = {
  albumImage: string,
  soundtrackName: string,
  soundtrackTime: number,
  artistName: string,
  isPlayingSoundtrack: boolean
}

export type SoundtrackList = {
  soundtracks: Soundtrack[],
};

export type AlbumList = {
  albums: Album[]
}

export type AlbumListResponse = {
  data: Album[]
}

export type SoundtrackListResponse  = {
  data: Soundtrack[]
}

export type SearchTerm = {
  searchTerm: string
}