
import PropTypes from 'prop-types'; 

const ImageUpload = ({ setImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result); 
    };
  };

  return (
    <div className="imageUpload">
      <label className="configLabel">
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="fileInput"
        />
      </label>
    </div>
  );
};


ImageUpload.propTypes = {
  setImage: PropTypes.func.isRequired, 
};

export default ImageUpload;


