import React from 'react';
import PropTypes from 'prop-types';

function FeatureCard({children, description}) {
  return (
    <div className='text-mtext bg-transparent border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow items-center justify-center whitespace-nowrap rounded-base *:font-base ring-offset-white transition-all gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-4'>
      <div className='border-border p-2 border inline-block rounded text-4xl'>{children}</div>
      <div className='text-xl'>{description}</div>
    </div>
  );
}

FeatureCard.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired
};

export default FeatureCard;
