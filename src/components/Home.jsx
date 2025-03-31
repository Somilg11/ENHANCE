/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <ImageUpload 
        setUploadImage={setUploadImage} 
        setEnhancedImage={setEnhancedImage} 
        setLoading={setLoading} 
      />
      <ImagePreview loading={loading} enhancedImage={enhancedImage} />
    </div>
  );
};

export default Home;
