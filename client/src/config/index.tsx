import { ControlItem } from "@/types/formTypes";

export const registerFormControls: ControlItem[] = [
  {
    name: "name",
    label: "User Name",
    placeholder: "Enter your User Name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input", 
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type:"password"
  },
];

export const signinFormControls: ControlItem[] = [
  
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
    componentType: "input", 
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your Password",
    componentType: "input",
    type:"password"
  },
];
