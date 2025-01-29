import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { signUpUser } from "@/redux/auth-slice";
import { SignUpResponse } from "@/types/formTypes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  [key: string]: string;
}
interface ErrorResponse {
  payload?: {
    message: string;
  };
}
const initialState = {
  userName: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    dispatch(signUpUser(formData))
      .then((data: SignUpResponse) => {
        if (data?.payload?.success) {
          toast({
            variant: "default",
            title: data?.payload?.message,
          });
          navigate("/auth/signup");
        } else {
          toast({
            variant: "destructive",
            title: data?.payload?.message || "Sign-up failed. Please try again.",
          });
        }
      })
      .catch((error: ErrorResponse) => {
        toast({
          variant: "destructive",
          title: error?.payload?.message || "An unexpected error occurred.",
        });
      });
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create New Account
        </h1>
        <p>
          Already have an account?
          <Link
            className="ml-2 font-medium underline text-primary hover:text-primary-dark"
            to="/auth/signin"
          >
            Sign In
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}
