import { container } from "inversify-props";
import { IUserService, UserService } from "@/services/UserService";
import { ITokenProvider, TokenProvider } from './Providers/TokenProvider';

export default function buildDependencyContainer(): void {
	container.addTransient<IUserService>(UserService);
	container.addTransient<ITokenProvider>(TokenProvider);
}