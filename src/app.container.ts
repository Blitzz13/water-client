import { IUserService, UserService } from "@/services/UserService";
import { container } from "inversify-props";
import { ITokenProvider, TokenProvider } from './Providers/TokenProvider';
import { GameService, IGameService } from './services/GameService';

export default function buildDependencyContainer(): void {
	container.addTransient<IUserService>(UserService);
	container.addTransient<IGameService>(GameService);
	container.addTransient<ITokenProvider>(TokenProvider);
}