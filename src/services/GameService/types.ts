export interface AddGameRequest {
	name?: string;
	description?: string;
	price?: number;
	rating?: number;
	state?: GameState;
	coverImage?: string;
	imageUrls?: string[];
	genre?: Genre;
	isFeatured?: boolean;
	companyName?: string;
}

export enum GameState {
	RELEASED = "Released",
	EARLY_ACCESS = "EarlyAccess",
	PREORDER = "Preorder",
}

export enum Genre {
	COOPERATIVE = "Cooperative",
	ACTION = "Action",
	ACTION_ADVENTURE = "ActionAdventure",
	ADVENTURE = "Adventure",
	RPG = "Rpg",
	SIMULATION = "Simulation",
	STRATEGY = "Strategy",
	SPORT = "Sport",
}

export interface Game {
	id?: string;
	name?: string;
	description?: string;
	price?: number;
	rating?: number;
	reviews?: Review[];
	state?: GameState;
	coverImage?: string;
	imageUrls?: string[];
	genre?: Genre;
	isFeatured?: boolean;
	companyName?: string;
}

export interface Review {
	id?: string;
	content?: string;
	userId?: string;
	username?: string;
	upvotes?: number;
}

export interface GameItem {
	id?: string;
	price?: number;
	rating?: number;
	coverImage?: string;
	isFeatured?: boolean;
}

export interface GameFilter {
	id?: string;
	name?: string;
	isFeatured?: boolean;
	genres?: Genre[];
	states?: GameState[];
}