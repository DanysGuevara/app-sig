"use client";
import React, { useState } from "react";
import { uploadFile } from "@/lib/uploadFile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UploadImageForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const url: any = await uploadFile(file, "games");
      setDownloadURL(url);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="file">Image</Label>
        <Input type="file" id="file" onChange={handleFileChange} required />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {error && <p>Error: {error}</p>}
      {downloadURL && (
        <div>
          <p>File uploaded successfully. Download URL:</p>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
            {downloadURL}
          </a>
        </div>
      )}
    </form>
  );
};

export default UploadImageForm;
