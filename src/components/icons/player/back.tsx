import React, { FC } from 'react';

type Props = {
    className: any
}

const BackIcon: FC<Props> = ({className}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" height="16" width="16" viewBox="0 0 16 16"><path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" className={className}></path></svg>
}

export default BackIcon