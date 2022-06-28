import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const values = {};
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(GlobalContext);
  return context;
};

export default useApp;
