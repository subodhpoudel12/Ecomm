import CommonForm from "@/components/common/form";
import { signinFormControls } from "@/config"; // Assuming this has your form controls defined
import { signInUser } from "@/redux/auth-slice";
import { SignInResponse } from "@/types/formTypes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
interface FormData {
  [key: string]: string;
}

export default function SignIn() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const dispatch = useDispatch();

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    dispatch(signInUser(formData)).then((data: SignInResponse) => {
      console.log(data);
    });
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign In
        </h1>
        <p>
          Don’t have an account?
          <Link
            className="ml-2 font-medium underline text-primary hover:text-primary-dark"
            to="/auth/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={signinFormControls}
        buttonText="Sign In"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
