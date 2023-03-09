import { useCalc } from "../Store/Store";
const Digit = ({ number }) => {
  const setDigits = useCalc(({ setDigits }) => setDigits);

  return (
    <button
      onClick={() => {
        setDigits(number);
      }}
      className="flex h-10 cursor-pointer items-center justify-center rounded bg-DKeyBg px-6 text-xl leading-none shadow-sm shadow-LKeyShadow dark:shadow-DKeyShadow"
    >
      {number}
    </button>
  );
};

export default Digit;
