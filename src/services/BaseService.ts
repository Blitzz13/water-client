import { Inject } from 'inversify-props';
import { ITokenProvider } from '@/Providers/TokenProvider';

export class BaserService {
	@Inject()
	public tokenProvider: ITokenProvider;

	protected updateOptions(options?: RequestInit): RequestInit {
		const update = { ...options };
		const token = this.tokenProvider.getToken();
		if (token) {
			update.headers = {
				...update.headers,
				Authorization: `Bearer ${token}`,
			};
		}

		return update;
	}
}