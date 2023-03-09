import { useCalc } from "../Store/Store";
const Operation = ({ operation }) => {
  const setOperation = useCalc(({ setOperation }) => setOperation);
  const setAnswer = useCalc(({ setAnswer }) => setAnswer);
  const Reset = useCalc(({ Reset }) => Reset);
  const RemoveDigit = useCalc(({ RemoveDigit }) => RemoveDigit);

  const bg_Text =
    operation === "del" || operation === "reset"
      ? "text-white dark:bg-DKey bg-LKey"
      : "";

  const eq =
    operation === "=" ? "text-white dark:bg-Red bg-Orange col-span-2" : "";
  const res = operation === "reset" ? "col-span-2" : "";
  const opts = "/*-+".includes(operation) ? "bg-DKeyBg" : "";

  const sendOperation = () => {
    switch (operation) {
      case "=":
        setAnswer();
        break;
      case "reset":
        Reset();
        break;
      case "del":
        RemoveDigit();
        break;
      default:
        setOperation(operation);
    }
  };
  return (
    <button
      onClick={sendOperation}
      className={`flex cursor-pointer items-center  justify-center rounded shadow-DKeyShadowOrange dark:shadow-sm ${bg_Text} h-10 text-xl uppercase leading-none shadow-sm shadow-LKeyShadow dark:shadow-DKeyShadow ${eq} ${res} ${opts}`}
    >
      {operation}
    </button>
  );
};

export default Operation;
