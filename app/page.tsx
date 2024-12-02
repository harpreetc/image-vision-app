"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const processImage = async (image: File) => {
    const response = await fetch("/api/process-image", {
      method: "POST",
      body: JSON.stringify({ imageName: image.name }),
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (!response.ok) {
      console.error("Failed to run Python script.");
    }
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    // Clear previous preview URL if it exists
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a JPEG, JPG, or PNG file.");
        return;
      }

      setSelectedImage(file);
      // Generate a preview URL and set it immediately
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };
  
  const handleUpload = async () => {
    if (!selectedImage) {
      alert("No image selected!");
      return;
    }
   
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
        setSelectedImage(null);
        setPreviewUrl(null);
        //await processImage(selectedImage); 
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred while uploading the image.");
    }
    
    };
  

  return (
    <div className="container max-w-screen-xl mx-auto px-4 items-center">
      <p className="max-w-3xl splay text-left text-slate-900 sm:text-3xl py-10">Week-5 Project</p>
      <div className="flex items-center space-x-4 py-10">
        <input 
          type="file" 
          accept=".jpeg,.jpg,.png" 
          onChange={handleImageChange} 
          className="items-center"
        />
        <button 
          onClick={handleUpload} 
          disabled={!selectedImage}
          className="px-4 py-2 bg-black text-white rounded hover:bg-opacity-80 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Upload
        </button>
      </div>
      {previewUrl && (
        <div className="grid grid-cols-1 gap-4 text-center">
          <div>
            <h2 className="text-lg font-semibold text-left px-4 py-7">Uploaded Image</h2>
            <div className="flex justify-center">
              <img
                src={previewUrl}
                alt="Preview"
                className="border rounded shadow-lg mt-2 max-w-md object-contain"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
}


