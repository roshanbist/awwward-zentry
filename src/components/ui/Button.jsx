// eslint-disable-next-line react/prop-types
const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-10 py-4 flex-center gap-1 text-black ${containerClass}`}
    >
      {leftIcon && (
        <div className='relative overflow-hidden inline-flex'>
          <span className='arrow-btn'>{leftIcon}</span>
          <span className='arrow-btn-hover'>{leftIcon}</span>
        </div>
      )}
      <div className='relative overflow-hidden inline-flex'>
        <span className='font-general text-sm leading-none uppercase arrow-btn'>
          {title}
        </span>
        <span className='font-general text-sm leading-none uppercase arrow-btn-hover'>
          {title}
        </span>
      </div>

      {rightIcon && (
        <div className='overflow-hidden relative inline-flex'>
          <span className='arrow-btn'>{rightIcon}</span>
          <span className='arrow-btn-hover'>{rightIcon}</span>
        </div>
      )}
    </button>
  );
};

export default Button;
