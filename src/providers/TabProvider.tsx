"use client";

import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

interface TabContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const defaultTabContext: TabContextType = {
  activeTab: "home",
  setActiveTab: () => {},
};

export const TabContext = createContext<TabContextType>(defaultTabContext);

export const TabProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const stored = localStorage.getItem("activeTab");
    if (stored) setActiveTab(stored);
  }, []);
  const handleActiveTab = (tab: string) => {
    console.log("Setting activeTab to:", tab);
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab: handleActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
