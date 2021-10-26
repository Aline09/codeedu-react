import React, { FC } from 'react';

type Props = {
    fill: string
}

const SearchIconActive: FC<Props> = ({fill}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z" fill={fill}></path></svg>
}

export default SearchIconActive