/* eslint-disable react/prop-types */

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={`${clipClass}`}>
      <img src={src} alt='contact-image' />
    </div>
  );
};

export default ImageClipBox;
