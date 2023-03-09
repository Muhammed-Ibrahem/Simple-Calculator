import Digit from "../Components/Digit";
import Operation from "../Components/Operation";

const CalcBody = () => {
  return (
    <section className="grid grid-cols-4 items-center justify-center gap-4 rounded bg-LCalcBody p-4 dark:bg-DCalcBody">
      <Digit number={7} />
      <Digit number={8} />
      <Digit number={9} />
      <Operation operation="del" bg />
      <Digit number={4} />
      <Digit number={5} />
      <Digit number={6} />
      <Operation operation="+" />
      <Digit number={1} />
      <Digit number={2} />
      <Digit number={3} />
      <Operation operation="-" />
      <Digit number="." />
      <Digit number={0} />
      <Operation operation="/" />
      <Operation operation="*" />
      <Operation extra="col-span-2 w-full" operation="reset" bg />
      <Operation extra="col-span-2 w-full bg-Red" operation="=" bg />
    </section>
  );
};

export default CalcBody;
