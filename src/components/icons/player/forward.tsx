import React, { FC } from 'react';

type Props = {
    className: any
}

const ForwardIcon: FC<Props> = ({className}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" className={className}></path></svg>
}

export default ForwardIcon