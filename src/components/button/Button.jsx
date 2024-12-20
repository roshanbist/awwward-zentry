// eslint-disable-next-line react/prop-types
const Button = ({ id, title, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-10 py-4 text-black ${containerClass}`}
    >
      <div className='overflow-hidden relative leading-none flex-center'>
        <div className='flex-center gap-1 translate-y-0 skew-y-0 opacity-100 duration-500 transition group-hover:-translate-y-full group-hover:skew-y-6 group-hover:opacity-0'>
          {leftIcon}
          <span className='font-general text-sm leading-none uppercase'>
            {title}
          </span>
        </div>
        <div className='flex-center gap-1 absolute left-0 translate-y-full skew-y-6 opacity-0 duration-500 transition group-hover:translate-y-0 group-hover:skew-y-0 group-hover:opacity-100'>
          {leftIcon}
          <span className='font-general text-sm leading-none uppercase'>
            {title}
          </span>
        </div>
      </div>
      {/* {rightIcon} */}
    </button>
  );
};

export default Button;
