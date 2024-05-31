 
import PropTypes from 'prop-types';

const BtnNormal = ({ text }) => {
  return (
    <button  
      className="bg-fourth text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline flex items-center rounded-lg mt-4"
      type="button"
    >
      {text} 
       
    </button>
  );
};
BtnNormal.propTypes = {
    text: PropTypes.string.isRequired,
  };
export default BtnNormal;
