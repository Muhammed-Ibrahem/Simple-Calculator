import { useCalc } from "../Store/Store";

const Screen = () => {
  const beforeOperation = useCalc(({ beforeOperation }) => beforeOperation);
  const currentScreen = useCalc(({ currentScreen }) => currentScreen);
  const operation = useCalc(({ operation }) => operation);
  const answer = useCalc(({ answer }) => answer);
  return (
    <section
      className={`mb-8 h-20 flex-col items-center justify-center overflow-auto rounded bg-LScreen p-4 text-right leading-none shadow dark:bg-DScreen dark:text-white`}
    >
      {!answer && (
        <>
          <p>{beforeOperation}</p>
          <p>{operation}</p>
          <p>{currentScreen}</p>
        </>
      )}
      <p>{answer}</p>
    </section>
  );
};

export default Screen;
