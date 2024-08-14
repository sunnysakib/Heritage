"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
const SignupForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.message === "created") {
        setError("");
        window.location.reload();
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };
  

  return (
    <Card>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>
          Enter your name, email and password to signin
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      {error === "" ? (
            ""
          ) : (
            <p className="bg-red-100 text-gray-700 text-center py-3 text-sm rounded-sm">
              {error}
            </p>
          )}
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="enter your name"  {...register("name", { required: "name is required" })}
              aria-invalid={errors.name ? "true" : "false"}/>
               {errors.name && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.name?.message?.toString()}
              </p>
            )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            id="name"
            placeholder="enter your email"
          />
          {errors.email && (
            <p role="alert" className="text-red-500 text-sm">
              {errors.email?.message?.toString()}
            </p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p role="alert" className="text-red-500 text-sm">
              Invalid email format
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
              id="password"
              type="password"
              placeholder="enter your password"
              {...register("password", { required: "password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.password?.message?.toString()}
              </p>
            )}
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit">Create Account</Button>
      </CardFooter>
      </form>
    </Card>
  );
};

export default SignupForm;
