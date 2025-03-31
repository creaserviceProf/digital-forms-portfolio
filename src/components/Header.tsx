
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cube } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-accent bg-opacity-80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Cube className="h-6 w-6 text-highlight" />
          <span>3D<span className="text-highlight">Artist</span></span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "Portfolio", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white hover:text-highlight transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="bg-highlight hover:bg-highlight-alt">
          Let's Talk
        </Button>
      </div>
    </header>
  );
};

export default Header;
