"use client"
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
const RegionForm: React.FC = () => {
  return (
      <form>
          <Card x-chunk="dashboard-RegionForm">
              <CardHeader>
                <CardTitle>Region Form</CardTitle>
                  <CardDescription>
                    Add a new region to the database.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Region Name" />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
    </form>
  );
};

export default RegionForm;
