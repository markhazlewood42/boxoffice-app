import { useStateWithSessionStorage } from "./customHooks";

// Convenience wrapper for any component to get or set latest search string
// value from session storage.
export const useSearchString = () => {
    return useStateWithSessionStorage('', 'lastSearchString');
};