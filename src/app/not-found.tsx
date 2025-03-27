import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Halaman yang kamu cari tidak ditemukan.
      </p>
    </div>
  );
};

export default NotFoundPage;
