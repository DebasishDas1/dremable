// pages/404.tsx

import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] py-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops!<br /> Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">It seems like you&apos;ve stumbled upon a page that doesn&apos;t exist.</p>
            <Link href="/" className="text-lg text-white bg-black p-3 rounded-lg shadow-lg">
                Go back to home
            </Link>
        </div>
    );
};

export default Custom404;
