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

const RegionForm: React.FC = () => {
  const [regionName, setRegionName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/region", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regionname: regionName }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Region created successfully.",
          variant: "default",
        });
        setRegionName(""); // Limpia el input después de crear la región
      } else {
        toast({
          title: "Error",
          description: "Failed to create region.",
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
      <Card x-chunk="dashboard-RegionForm">
        <CardHeader>
          <CardTitle>Region Form</CardTitle>
          <CardDescription>Add a new region to the database.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Region Name"
            value={regionName}
            onChange={(e) => setRegionName(e.target.value)}
          />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegionForm;
