export type Option = {
  id: string;
  label: string;
};
export interface SignUpResponse {
  payload: {
    success: boolean;
    message: string;
  };
}
export interface SignInResponse {
  payload: {
    success: boolean;
    message: string;
    user:string;
  };
}

export type ControlItem = {
  name: string;
  label: string;
  componentType: "input" | "select" | "textarea";
  placeholder: string;
  type: string;
  options?: Option[];
};
