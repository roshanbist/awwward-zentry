// eslint-disable-next-line react/prop-types
const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-10 py-6 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className='relative inline-flex overflow-hidden font-general text-sm uppercase'>
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
