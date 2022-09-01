import { LocalStorage } from "./local-storage";
import { WebStorage } from "./storage-abstract";

class BrowserStorage extends WebStorage {

    /**
     * Driver to use => LocalStorage | SessionStorage
     */
    private driver: WebStorage = new LocalStorage();

    /**
     * Get data for the key
     * @param key key to use
     * @returns data or null
     */
    public get<T>(key: string): T | null {
        return this.driver.get(key);
    }

    /**
     * Sets data with a key
     * @param key key to use
     * @param data data to store
     * @returns data or null
     */
    public set<T>(key: string, data: T): T | null {
        return this.driver.set(key, data);
    }

    /**
     * Remove data from storage
     * @param key key to use
     * @returns boolean
     */
    public remove(key: string): boolean {
        return this.driver.remove(key);
    }

}