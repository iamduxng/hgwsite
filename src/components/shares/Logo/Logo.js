import React from 'react';
import {LoadingSpinner} from 'components/shares';

const Logo = () => {
  return (
    <div className="logo">
      <LoadingSpinner />
      <h4 className="logo__slogan">
        Be your best Travel Buddy
      </h4>
    </div>
  )
};

export default Logo;