/* eslint-disable react/prop-types */
 

const Hero = ({ heading, subheading, backgroundImage }) => {
  return (
    <div
      className={`hero-section bg-no-repeat bg-center bg-cover h-[500px] flex justify-center items-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="word-area">
      <h1 className='text-primary text-6xl font-extrabold'>{heading}</h1>
      <p className='text-primary text-2xl pt-4 text-center'>
        Home <span> &gt; {subheading}</span>
      </p>
      </div>
    </div>
  );
};

export default Hero;
