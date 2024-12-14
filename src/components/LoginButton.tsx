import { UserIcon } from "lucide-preact";
import { Button } from "./ui/button";

export const LoginButton = () => {
  return (
    <Button
      id="btn-login"
      variant="outline"
      onClick={() => {
        alert("Login");
      }}
    >
      <UserIcon className="icon" />
      Sign in
    </Button>
  );
};
