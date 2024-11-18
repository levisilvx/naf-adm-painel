import { useAuth } from "@/context/auth-context";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function SignOutButton(){

  function handleSignOut(){
    const { logOut } = useAuth();
    logOut();
  }
  return(
    <div>
      <Button
        type="button"
        variant={"destructive"}
        onClick={handleSignOut}
      >
        <LogOut/>
      </Button>

    </div>
  );
}