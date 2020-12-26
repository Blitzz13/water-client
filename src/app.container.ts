import { container } from "inversify-props";
import { IUserService, UserService } from "@/services/UserService";

export default function buildDependencyContainer(): void {
	container.addTransient<IUserService>(UserService);
}