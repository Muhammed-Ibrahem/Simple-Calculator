import { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(true);
  const handleTheme = () => {
    setDark((e) => !e);
    document.body.classList.toggle("dark");
  };
  return (
    <header className="mb-4 flex w-full items-center justify-between dark:text-white">
      <h1 className="text-2xl font-bold">calc</h1>
      <div className="flex items-center gap-4">
        <span className="self-end text-[10px] uppercase leading-none">
          theme
        </span>
        <div
          onClick={handleTheme}
          className="relative h-4 w-10 cursor-pointer select-none rounded-full bg-LCalcBody dark:bg-DCalcBody"
        >
          <div
            className={`absolute top-1/2 ${
              dark ? "left-1" : "left-[calc(100%-16px)]"
            } h-3 w-3 -translate-y-1/2 rounded-full bg-Orange transition-all  dark:bg-DarkOrange`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
