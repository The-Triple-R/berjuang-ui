import { Button } from "../ui/button";
import { BsTranslate } from "react-icons/bs";
import { Card } from "../ui/card";

const LanguageMenu = ({ isOpen, toggle, setLang }) => (
  <div className="relative">
    <Button className="rounded-full bg-white w-10" onClick={toggle}>
      <BsTranslate />
    </Button>
    <ul
      className={`absolute top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
      }`}
    >
      <Card className="bg-white py-4 flex flex-col shadow-md">
        {["id", "en"].map((lng) => (
          <li key={lng} className="px-6 py-2 hover:bg-black hover:text-white cursor-pointer " onClick={() => setLang(lng)}>
            <span className="text-lg">
              {lng === "id" ? "Indonesia" : "English"}
            </span>
          </li>
        ))}
      </Card>
    </ul>
  </div>
);

export default LanguageMenu;
