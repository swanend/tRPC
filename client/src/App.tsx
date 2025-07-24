import { useEffect, useState } from "react";
import "./App.css";
import { trpc } from "./utils/trpc";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    trpc.hello.query({ name: "SwanEnd" }).then((data) => {
      console.log(data);
      setName(data);
    });
    return () => {};
  }, []);
  return <>{name}</>;
}

export default App;
