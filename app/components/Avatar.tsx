'use client';

import Images from 'next/image';

const Avatar = () => {
    return (
        <Images src="/images/placeholder.jpg" alt="Avatar" className="rounded-full" height="30" width="30" />
    )
}

export default Avatar;