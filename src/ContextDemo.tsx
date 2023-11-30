import { PropsWithChildren, createContext, useContext, useState } from "react";

const Context = createContext({ count: 0, increase: () => {} });

const Provider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);

  const value = {
    count,
    increase,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useStore = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useStore must be used within a Provider");
  }

  return context;
};

const Parent = ({ children }: PropsWithChildren) => {
  console.log("render ContextDemo > Parent");
  return (
    <div className="rounded-md border border-dashed border-red-500 p-4 m-4">
      <h1>Parent</h1>
      <div>{children}</div>
    </div>
  );
};

const ChildA = () => {
  const { count, increase } = useStore();

  console.log("render ContextDemo > ChildA");
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
  console.log("render ContextDemo > ChildB");
  return (
    <div className="rounded-md border border-dashed border-blue-500 p-4 m-4">
      <h2>Child B</h2>
    </div>
  );
};

export const ContextDemo = () => {
  return (
    <div className="rounded-md border border-solid border-violet-500 p-4 my-4">
      <h1 className="font-bold">ContextDemo</h1>
      <Parent>
        <Provider>
          <ChildA />
          <ChildB />
        </Provider>
      </Parent>
    </div>
  );
};
