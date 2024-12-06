import { createContext, useState } from "react";

// creating context
export const ElementsContext = createContext();

// providing context
export const CustomizedElementsContextProvider = ({ children }) => {
    const [elements, setElements] = useState({});

    return <ElementsContext.Provider value={{ elements, setElements }}>
        {/* these children represent everything that is wrapped with provider */}
        {children}
    </ElementsContext.Provider>
}