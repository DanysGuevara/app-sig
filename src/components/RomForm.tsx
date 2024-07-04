"use client";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import UploadRomForm from "@/components/UploadRomForm";
import UploadImageForm from "@/components/UploadImageForm";
import { toast } from "@/components/ui/use-toast";
import { uploadFile } from "@/lib/uploadFile";

const RomForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const filesizeRef = useRef<HTMLInputElement>(null);
  const sha256Ref = useRef<HTMLInputElement>(null);
  const regionidRef = useRef<HTMLInputElement>(null);
  const releasedateRef = useRef<HTMLInputElement>(null);
  const publisherRef = useRef<HTMLInputElement>(null);
  const developerRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const uploaddateRef = useRef<HTMLInputElement>(null);
  const uploaderRef = useRef<HTMLInputElement>(null);

  const handleRomUpload = (file: File) => setFile(file);
  const handleImageUpload = (file: File) => setImageFile(file);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !imageFile) {
      toast({
        title: "Error",
        description: "Please upload both ROM and image files.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const romDownloadUrl = await uploadFile(file, "roms");
      const imageUrl = await uploadFile(imageFile, "games");

      const response = await fetch("/api/roms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleRef.current?.value,
          download: romDownloadUrl,
          filesize: file.size,
          sha256: " ",
          regionid: regionidRef.current?.value,
          releasedate: new Date().toISOString().split("T")[0],
          publisher: publisherRef.current?.value,
          developer: developerRef.current?.value,
          description: descriptionRef.current?.value,
          uploaddate: new Date().toISOString().split("T")[0],
          uploader: uploaderRef.current?.value,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create ROM");
      }

      toast({
        title: "Success",
        description: "ROM created successfully",
        variant: "default",
      });
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card x-chunk="dashboard-04-chunk-1">
      <CardHeader>
        <CardTitle>Create Roms</CardTitle>
        <CardDescription>
          This form allows you to create a new ROM for your store. you must
          upload the roms file before saving
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Title" ref={titleRef} required />
          <Input placeholder="Region ID" ref={regionidRef} required />
          <Input placeholder="Publisher" ref={publisherRef} />
          <Input placeholder="Developer" ref={developerRef} />
          <Input placeholder="Description" ref={descriptionRef} />
          <Input placeholder="Uploader" ref={uploaderRef} />

          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
        <UploadRomForm onUpload={handleRomUpload} />
        <UploadImageForm onUpload={handleImageUpload} />
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        {error && <p>Error: {error}</p>}
      </CardFooter>
    </Card>
  );
};

export default RomForm;
