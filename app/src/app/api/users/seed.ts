import { User } from "./entity";

export const usersSeed: User[] = [
	{
		id: "root",
		balance: 0,
		creditLimit: 0,
		creditSpent: 0,
		defiColleteral: 0,
		card: {
			number: "1111 2222 3333 4444",
			expiry: "04/20",
		},
	},
];
