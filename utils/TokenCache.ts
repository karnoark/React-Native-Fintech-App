import * as SecureStore from 'expo-secure-store';

//Define the TokenCache interface
export interface TokenCache{
    getToken: (key: string) => Promise<string | undefined | null>;
    saveToken: (key: string, token: string) => Promise<void>;
    clearToken?: (key: string) => void; 
}

//implement the tokencache interface using expo-secure-store
export const secureTokenCache: TokenCache = {
    getToken: async(key: string) => {
        try {
            const token = await SecureStore.getItemAsync(key);
            return token;
        } catch (error) {
            console.error('Error getting token: ', error)
            return null;
        }
    },

    saveToken: async (key: string, token: string) => {
        try {
            await SecureStore.setItemAsync(key, token)
        } catch (error) {
            console.error('Error clearing token: ', error)
        }
    }
}