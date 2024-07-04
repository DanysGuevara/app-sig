"use client";
import React from "react";
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
const GenreForm: React.FC = () => {
  return (
    <form>
      <Card x-chunk="dashboard-GenreForm">
        <CardHeader>
          <CardTitle>Genre Form</CardTitle>
          <CardDescription>Add a new genre to the database.</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Genre Name" />
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default GenreForm;
