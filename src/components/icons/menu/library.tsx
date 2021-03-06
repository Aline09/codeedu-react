import React, { FC } from 'react';

type Props = {
    fill: string
}

const LibraryIcon: FC<Props> = ({fill}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill={fill}></path></svg>
}

export default LibraryIcon