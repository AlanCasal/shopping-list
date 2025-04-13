/* eslint-disable no-console */
import * as SecureStore from 'expo-secure-store';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';
import { tryCatch } from '@utils/tryCatch';
import { isWeb } from './utils';

const createTokenCache = (): TokenCache => {
	return {
		getToken: async (key: string) => {
			const { data: item, error } = await tryCatch(SecureStore.getItemAsync(key));

			if (error) {
				console.log('\x1b[33m\x1b[41m\x1b[1m[error getting token]\x1b[0m', error);
				return null;
			}

			item
				? console.log('\x1b[33m\x1b[44m\x1b[1m[key used]\x1b[0m', key)
				: console.log('\x1b[33m\x1b[44m\x1b[1m[no values stored under key: ]\x1b[0m', key);

			return item;
		},
		saveToken: async (key: string, token: string) => {
			return SecureStore.setItemAsync(key, token);
		},
	};
};

export const tokenCache = !isWeb ? createTokenCache() : undefined;
