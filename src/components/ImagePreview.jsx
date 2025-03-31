import React from "react";
import { Loader2 } from "lucide-react";

const ImagePreview = ({ enhancedImage, loading }) => {
  return (
    <div className="flex flex-col items-center mt-4 w-full max-w-4xl p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4">Enhanced Image</h2>

      {loading ? (
        <div className="flex flex-col items-center">
          <Loader2 size={40} className="animate-spin text-blue-400" />
          <p className="mt-2 text-gray-400 text-sm">AI is enhancing your image...</p>
        </div>
      ) : enhancedImage ? (
        <img
          src={enhancedImage}
          alt="Enhanced"
          className="w-full max-h-64 object-contain rounded-lg border border-blue-500"
        />
      ) : (
        <p className="text-gray-400">No image available</p>
      )}
    </div>
  );
};

export default ImagePreview;
