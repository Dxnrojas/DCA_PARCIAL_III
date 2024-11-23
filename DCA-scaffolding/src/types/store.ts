import { EventPost } from "./postEvent";
export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: string;
  event: EventPost[];
};

export enum Screens {
  "USERVIEW" = "USERVIEW",
  "ADMINVIEW" = "ADMINVIEW"
}

export enum Actions {
  "NAVIGATE" = "NAVIGATE",
}
