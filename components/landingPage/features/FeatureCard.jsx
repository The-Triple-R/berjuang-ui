import React from 'react';
import PropTypes from 'prop-types';

function FeatureCard({ children, title, description }) {
  return (
    <div className='text-mtext bg-white border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow rounded-base *:font-base transition-all flex flex-col gap-2 p-4'>
      <div className="flex items-center gap-3">
        <div className="border border-border p-3 rounded-md text-3xl bg-gray-100">
          {children}
        </div>
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FeatureCard;
