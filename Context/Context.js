import { createContext } from "react";

const Context = createContext([{theme: "light"}, () => {}]);

export default Context;