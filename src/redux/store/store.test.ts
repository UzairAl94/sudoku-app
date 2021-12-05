import * as cacheHelpers from 'utils/Cache';
import { checkAndRestoreFromLocal } from 'redux/utils/store.helper';

describe('Store restore from local function test', () => {
	it('should set the supplied initial state (keys loaded from local Storage)', () => {
		const expectedLocalStorage = {
			userAuth: {
				isLoading: false,
				isError: false,
				error: null,
				auth: null,
			},
		};

		const spyExists = jest.spyOn(cacheHelpers, 'existInLocal');
		spyExists.mockReturnValue(true);
		const spyGetFromLocal = jest.spyOn(cacheHelpers, 'getFromLocal');
		spyGetFromLocal.mockReturnValueOnce(null);

		const localStorage = checkAndRestoreFromLocal();

		expect(localStorage).toMatchObject(expectedLocalStorage);
	});
});
