import { Metadata } from "next";
import { title } from "process";

export const metadata: Metadata = {
  title: "Customers",
};

const Customers = () => {
  return (
    <div className="h-full">
      <div className="h-[10%]">
        <h2 className="text-xl font-bold">Customers Page</h2>
      </div>
      <div className="h-[90%] flex *:m-auto">
        <p className="text-sm">Page under development. Check again another time!</p>
      </div>
    </div>
  );
};
export default Customers;
