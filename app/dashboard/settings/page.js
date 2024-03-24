import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import React from "react";

export const metadata = {
  title: "Settings",
  description: "This is settings page",
};
const Settings = () => {
  // throw new Error("Error in the setting page")
  return (
    <div>
      <p className="text-3xl bg-green-400">This is settings page</p>
      <Button path="/dashboard/analytics">Go Analytics</Button>
      <SortProducts/>
    </div>
  );
};

export default Settings;
