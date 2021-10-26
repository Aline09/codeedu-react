import React, { FC } from 'react';

type Props = {
    className: any
}

const PauseIcon: FC<Props> = ({className}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" viewBox="0 0 16 16" className={className}><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>
}

export default PauseIcon