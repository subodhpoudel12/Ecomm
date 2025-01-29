import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="justify-center hidden w-1/2 px-12 bg-black lg:flex item-center">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to the Ecommerce Site
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 px-4 py-12 bg-background sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
