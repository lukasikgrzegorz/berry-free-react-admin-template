import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Delete, UploadFile } from '@mui/icons-material';

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file, index) => ({
      id: `${new Date().getTime()}_${index}`,
      file
    }));

    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (id) => {
    setSelectedImages((prevImages) => prevImages.filter((image) => image.id !== id));
  };

  console.log(selectedImages);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' }}>
      <Button variant="outlined">
        <Box component="label" htmlFor="files" paddingTop={1}>
          <UploadFile />
          <Box component="input" id="files" type="file" accept="image/*" multiple onChange={handleImageChange} sx={{ display: 'none' }} />
        </Box>
      </Button>
      <Box>
        {selectedImages.map((image) => (
          <Box
            key={image.id}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' }}
            marginTop={2}
          >
            <Box component="img" src={URL.createObjectURL(image.file)} alt="image" sx={{ width: '300px' }} marginBottom={1} />
            <Button variant="outlined" onClick={() => removeImage(image.id)} color="primary">
              <Delete />
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ImageUploader;
