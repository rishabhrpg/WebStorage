export abstract class WebStorage {

    /**
     * Abstract get data
     * @param key key as string
     */
    public abstract get<T>(key: string): T | null;

    /**
     * Abstract set data
     * @param key key as string
     * @param data data to be stored
     */
    public abstract set<T>(key: string, data: T): T | null; 

    /**
     * Abstract remove key value pair
     * @param key key as string
     */
    public abstract remove(key: string): boolean;
}