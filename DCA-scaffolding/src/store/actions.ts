import { Actions } from "../types/store";
import { getProducts } from "../utils/firebase";

export const navigate = (screen: string) => {
    return {
        action: Actions.NAVIGATE,
        payload: screen,
    }
};

