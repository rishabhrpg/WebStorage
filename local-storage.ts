import { WebStorage } from "./storage-abstract";

export class LocalStorage extends WebStorage {

    /**
     * Get data from local storage
     * @param key key to use
     * @returns data or null
     */
    public get<T>(key: string): T | null {
        const data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }

    /**
     * Set data to local storage
     * @param key key to use
     * @param data data to be stored
     * @returns data or null
     */
    public set<T>(key: string, data: T): T | null {
        window.localStorage.setItem(key, JSON.stringify(data));
        return this.get(key);
    }

    /**
     * Remove data from local storage
     * @param key key to use
     * @returns boolean
     */
    public remove(key: string): boolean {
        window.localStorage.removeItem(key);
        return true;
    }

}