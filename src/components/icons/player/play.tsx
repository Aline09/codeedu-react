import React, { FC } from 'react';

type Props = {
    className: any
}

const PlayIcon: FC<Props> = ({className}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" viewBox="0 0 16 16" className={className}><path d="M4.018 14L14.41 8 4.018 2z"></path></svg>
}

export default PlayIcon