import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import { processImageWithPicWish } from "../utils/enhanceImageApi"; // Adjust the import path as necessary

const ImageUpload = ({ setUploadImage, setEnhancedImage, setLoading }) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
      setUploadImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!imageFile) return;

    setLoading(true);
    setEnhancedImage(null); // Reset previous enhanced image

    try {
      const enhancedUrl = await processImageWithPicWish(imageFile); // Pass the actual File object
      setEnhancedImage(enhancedUrl);
    } catch (error) {
      console.error("Enhancement failed:", error);
      setEnhancedImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 border border-gray-700">
      <label
        htmlFor="imageUpload"
        className="w-full h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:border-blue-400 transition p-4"
      >
        {preview ? (
          <img src={preview} alt="Preview" className="h-full object-contain rounded-lg" />
        ) : (
          <div className="flex flex-col items-center">
            <UploadCloud size={40} className="text-gray-400" />
            <p className="mt-2 text-gray-400 text-sm">Click or Drag & Drop an Image</p>
          </div>
        )}
      </label>

      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      <button 
        onClick={handleUpload} 
        className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded-lg font-semibold">
        Upload & Enhance
      </button>
    </div>
  );
};

export default ImageUpload;
