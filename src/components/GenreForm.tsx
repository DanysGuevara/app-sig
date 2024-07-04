"use client";

import React, { useState } from "react";
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
import { toast } from "@/components/ui/use-toast"; // Importa la función toast

const GenreForm: React.FC = () => {
  const [genreName, setGenreName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/genre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ genrename: genreName }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Genre created successfully.",
          variant: "default",
        });
        setGenreName(""); // Limpia el input después de crear el género
      } else {
        toast({
          title: "Error",
          description: "Failed to create genre.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card x-chunk="dashboard-GenreForm">
        <CardHeader>
          <CardTitle>Genre Form</CardTitle>
          <CardDescription>Add a new genre to the database.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Genre Name"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default GenreForm;
