import { Button } from "../ui/button";
import GoogleIcon from "../icons/google-icon";
import useLanguageStore from "@/lib/zustand/useLanguageStore";
import langData from "@/lib/lang";

const LoginButton = () => {
  const { lang } = useLanguageStore();
  return (
    <Button className="bg-white">
      <GoogleIcon />
      {langData[lang].loginButton}
    </Button>
  );
};

export default LoginButton;
