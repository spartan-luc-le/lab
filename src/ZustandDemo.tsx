import { PropsWithChildren } from "react";
import { create } from "zustand";

const useStore = create<{ count: number; increase: () => void }>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

const Parent = ({ children }: PropsWithChildren) => {
  console.log("render ZustandDemo > Parent");
  return (
    <div className="rounded-md border border-dashed border-red-500 p-4 m-4">
      <h1>Parent</h1>
      <div>{children}</div>
    </div>
  );
};

const ChildA = () => {
  const { count, increase } = useStore();

  console.log("render ZustandDemo > ChildA");
  return (
    <div className="rounded-md border border-dashed border-green-500 p-4 m-4">
      <h2>Child A</h2>
      <button className="bg-slate-300 p-2 rounded-md text-slate-900 m-2" onClick={increase}>
        Increase {count}
      </button>
    </div>
  );
};

const ChildB = () => {
  console.log("render ZustandDemo > ChildB");
  return (
    <div className="rounded-md border border-dashed border-blue-500 p-4 m-4">
      <h2>Child B</h2>
    </div>
  );
};

export const ZustandDemo = () => {
  return (
    <div className="rounded-md border border-solid border-violet-500 p-4 my-4">
      <h1 className="font-bold">ZustandDemo</h1>
      <Parent>
        <ChildA />
        <ChildB />
      </Parent>
    </div>
  );
};
