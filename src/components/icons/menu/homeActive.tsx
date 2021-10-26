import React, { FC } from 'react';

type Props = {
    fill: string
}

const HomeActiveIcon: FC<Props> = ({fill}) => {
    return <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill={fill}></path></svg>
}

export default HomeActiveIcon