'use client';

import Images from 'next/image';

interface AvatarProps {
    src: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return (
        <Images src={src || "/images/placeholder.jpg"} alt="Avatar" className="rounded-full" height="30" width="30" />
    )
}

export default Avatar;