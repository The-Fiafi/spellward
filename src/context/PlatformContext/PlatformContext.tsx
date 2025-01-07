import { createContext } from "react";

export type PlatformGlobalContent = "mobile" | "desktop";

export default createContext<PlatformGlobalContent>("mobile");