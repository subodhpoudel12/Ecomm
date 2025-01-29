import { Outlet } from "react-router-dom";

export default function ShoppingLayout() {
  return <div className="flex flex-col overflow-hidden bg-white">
    // common header
    <main className="flex flex-col w-full">
      <Outlet/>
    </main>

  </div>;
}
