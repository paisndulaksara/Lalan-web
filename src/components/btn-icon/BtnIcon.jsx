import React from 'react'; 
import { Arrow } from '../../utils/iocns';
import PropTypes from 'prop-types';

const BtnIcon = ({ text }) => {
  return (
    <button  
      className="bg-fourth text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex items-center rounded-full"
      type="button"
    >
      {text} 
      <Arrow className='rounded-full bg-primary text-secondary text-3xl p-2 ml-3'/>
    </button>
  );
};
BtnIcon.propTypes = {
    text: PropTypes.string.isRequired,
  };
export default BtnIcon;
