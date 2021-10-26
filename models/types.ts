export type Album = {
  id: string,
  name: string,
  artist: string,
  created_at: string
}

export type Soundtrack = {
  id: string,
  album_id: string,
  name: string,
  minutes: number
}