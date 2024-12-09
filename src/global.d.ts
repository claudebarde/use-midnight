// import type { DAppConnectorAPI } from "./api";
declare module "*.css";
declare module "*.svg";

declare global {
  interface Window {
    midnight?: {
      [key: string]: DAppConnectorAPI;
    };
  }
}
