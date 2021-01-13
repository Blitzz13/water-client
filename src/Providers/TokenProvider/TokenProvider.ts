import { Vue } from "vue-property-decorator";
import { ITokenProvider } from "./ITokenProvider";
import { injectable } from 'inversify-props';
import store from "@/store";

@injectable()
export class TokenProvider extends Vue implements ITokenProvider {
	public getToken(): string {
		if (store.getters) {
			return store.getters.token;
		}

		return null;
	}

	protected updateOptions(options?: RequestInit): RequestInit {
		debugger
		const update = { ...options };
		if (this.getToken()) {
			update.headers = {
				...update.headers,
				Authorization: `Bearer ${this.getToken()}`,
			};
		}

		return update;
	}
}