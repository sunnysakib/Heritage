import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginFrom from "./_components/LoginFrom";
import SignupForm from "./_components/SignupForm";
const page = () => {
  return (
    <div className="flex flex-col gap-y-10  py-[100px] justify-center items-center">
      <div>
        <Tabs defaultValue="SignIn" className="w-[400px] h-[430px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="SignIn">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="SignIn">
            <LoginFrom />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
          {/* <div className="bg-slate-200 py-4 text-center text-neutral-700 font-medium rounded-md mt-3">
            <p>Admin: admin@gmail.com</p>
            <p>password: admin</p>
          </div> */}
        </Tabs>
      </div>
    </div>
  );
};

export default page;
