import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>이미지를 여기에 끌어 놓거나 클릭하세요.</p>
      </div>
      {uploadedImage && (
        <div>
          <p>업로드된 이미지:</p>
          <img src={uploadedImage} alt="Uploaded" style={uploadedImageStyle} />
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  width: '350px',
  height: '200px',
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const uploadedImageStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
  marginTop: '16px',
};

export default ImageUploader;
