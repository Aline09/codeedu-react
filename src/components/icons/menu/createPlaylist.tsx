import React, { FC } from 'react';

type Props = {
    className: any
}

const CreatePlaylistIcon: FC<Props> = ({className}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" height="12" width="12" viewBox="0 0 16 16" className={className}><path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path><path fill="none" d="M0 0h16v16H0z"></path></svg>
}

export default CreatePlaylistIcon