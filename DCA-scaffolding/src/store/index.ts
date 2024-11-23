import { reducer } from "./reducer";

import Storage from "../utils/storage";
import { AppState, Observer, Screens } from "../types/store";
import { onAuthStateChanged } from "firebase/auth";
import { navigate } from "./actions";
import { EventPost } from "../types/postEvent";

const initialState: AppState = {
    screen: 'DASHBOARD',
    event: [],
};

export let appState = initialState;

let observers: Observer[] = [];

// Dispatch
export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    
    appState = newState;

	observers.forEach((o: any) => o.render());
};

// Add Observers
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};