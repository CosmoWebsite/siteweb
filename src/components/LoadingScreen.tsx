import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczPfVEvULcTDfcgvT51mw1wQwx00jNnFsDsV1EUoQ-5MAwvCYWl9cmu9Q_f11-f3JwoIlaf6g1tuBBjzdq96C787atv1JiufVIXDyitI30UqHLg24J0kSnos0sfFSw_au_cPK30W_QRQQJALGylSlnJ4=w394-h352-s-no-gm?authuser=0"
        alt="COSMO BURGER"
        className="w-64 h-64 animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;