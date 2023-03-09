import { create } from "zustand";

export const useCalc = create((set) => ({
  beforeOperation: "",
  operation: "",
  finishedBefore: false,
  answer: "",
  currentScreen: "0",
  afterOperation: "",

  setDigits: (val) => {
    set((state) => {
      if (state.answer)
        return {
          operation: "",
          answer: "",
          beforeOperation: "",
          currentScreen: `${val}`,
          finishedBefore: false,
        };
      if (state.currentScreen.length > 18) return state;
      if (state.currentScreen.includes(".") && val === ".") return state;
      return {
        currentScreen:
          state.currentScreen === "0" ? "" + val : state.currentScreen + val,
        answer: "",
      };
    });
  },
  setOperation: (val) => {
    set((state) => {
      if (state.answer) {
        return {
          beforeOperation: state.answer,
          operation: val,
          answer: "",
          currentScreen: "",
          afterOperation: "",
        };
      }
      if (state.finishedBefore) {
        return {
          operation: val,
        };
      }
      return {
        beforeOperation: state.currentScreen,
        currentScreen: "",
        operation: val,
        finishedBefore: true,
        answer: "",
      };
    });
  },
  Reset: () =>
    set(() => ({
      beforeOperation: "",
      afterOperation: "",
      currentScreen: "0",
      operation: "",
      answer: "",
      finishedBefore: false,
    })),
  setAnswer: () => {
    set((state) => {
      if (!state.beforeOperation) return state;
      if (state.answer) {
        return {
          answer: eval(
            `${state.answer} ${state.operation} ${state.afterOperation}`
          ).toString(),
        };
      }
      return {
        answer: eval(
          `${state.beforeOperation} ${state.operation} ${state.currentScreen}`
        ).toString(),
        afterOperation: state.currentScreen,
      };
    });
  },
  RemoveDigit: () => {
    set((state) => {
      if (state.answer)
        return {
          beforeOperation: "",
          operation: "",
        };
      if (state.currentScreen === "0") {
        return state;
      }
      return {
        currentScreen: state.currentScreen.slice(
          0,
          state.currentScreen.length - 1
        ),
      };
    });
  },
}));
