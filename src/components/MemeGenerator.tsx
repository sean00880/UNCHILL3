import React, { useState } from "react";
import Image from "next/image";

const MemeGenerator = () => {
  const [background, setBackground] = useState<string>("/images/background.png");
  const [customText, setCustomText] = useState<string>("");
  const [templateText, setTemplateText] = useState<string>("");
  const [previewData, setPreviewData] = useState({
    background,
    customText,
    templateText,
  });

  // Update preview whenever state changes
  const updatePreview = () => {
    setPreviewData({
      background,
      customText,
      templateText,
    });
  };

  return (
    <section className="flex flex-col py-8 px-6 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Meme Generator</h2>

      {/* Step 1: Choose Background */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">1. Choose a Background</h3>
        <div className="flex gap-4">
          {/* Background Selection */}
          <button
            className="p-4 border rounded-md hover:bg-gray-200 transition"
            onClick={() => {
              setBackground("/images/background.png");
              updatePreview();
            }}
          >
            Template
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setBackground(reader.result as string);
                  updatePreview();
                };
                reader.readAsDataURL(file);
              }
            }}
            className="p-4 border rounded-md"
          />
        </div>
      </div>

      {/* Step 2: Static Character Image */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">2. Static Character Image</h3>
        <div className="p-4 border rounded-md">
          <Image src="/images/unchill.png" alt="Static Character" height={400} width={500} className="w-32 h-auto mx-auto" />
          <p className="text-center text-gray-500 mt-2">This cannot be changed.</p>
        </div>
      </div>

      {/* Step 3: Add Caption */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">3. Add Caption</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Choose a Template Caption:</label>
          <select
            value={templateText}
            onChange={(e) => {
              setTemplateText(e.target.value);
              updatePreview();
            }}
            className="w-full border px-4 py-2 rounded-md"
          >
            <option value="">Select a template</option>
            <option value="When you're UNCHILL AF!">When you&apos;re UNCHILL AF!</option>
            <option value="Can't stop, won't stop!">Can&apos;t stop, won&apos;t stop!</option>
            <option value="Ethereum? More like EtherMAD!">Ethereum? More like EtherMAD!</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Or add your own text:</label>
          <textarea
            value={customText}
            onChange={(e) => {
              setCustomText(e.target.value);
              updatePreview();
            }}
            placeholder="Write your custom text here..."
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Preview</h3>
        <div
          className="relative w-full h-64 border rounded-md overflow-hidden bg-gray-200 flex items-center justify-center"
          style={{ backgroundImage: `url(${previewData.background})`, backgroundSize: "cover" }}
        >
          <Image src="/images/unchill.png" width={500} height={400} alt="Static Character" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-auto" />
          <p className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded-md">
            {previewData.templateText || previewData.customText || "Your caption here"}
          </p>
        </div>
      </div>

      {/* Finalize */}
      <div className="text-center">
        <button
          onClick={() => alert("Meme generated!")}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
        >
          Generate Meme
        </button>
      </div>
    </section>
  );
};

export default MemeGenerator;
