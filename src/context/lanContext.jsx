import { useState, createContext, useContext } from "react";

export const LanContext = createContext(null);

export const LanProvider = ({ children }) => {
  const [lan, setLan] = useState("es");
  const [section, setSection] = useState("home");

  const imageURL = "https://estudiofeo.com/backend/images/";

  return <LanContext.Provider value={{ lan, setLan, imageURL, section, setSection }}>{children}</LanContext.Provider>;
};

export const useDataContext = () => {
  const context = useContext(LanContext);
  if (!context) {
    throw new Error("useDataContext must be used within a CartProvider");
  }
  return context;
};
