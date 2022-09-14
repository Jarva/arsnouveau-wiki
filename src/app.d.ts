// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		category?: string;
		entry?: string;
	}

	// interface Platform {}
	interface GithubObject {
		name: string;
		path: string;
		sha: string;
		size: number;
		url: string;
		html_url: string;
		git_url: string;
		download_url?: string;
		type: 'file' | 'dir';
	}

	interface LanguageDictionary {
		[x: string]: { [x: string]: string };
	}

	interface PatchouliPage {
		type:
			| 'patchouli:text'
			| 'patchouli:crafting'
			| 'ars_nouveau:apparatus_recipe'
			| 'ars_nouveau:imbuement_recipe'
			| string;
		recipe?: string;
		text?: string;
		entries?: Array<string>;
		title?: string;

		[x: string]: string;
	}

	interface PatchouliCategory {
		name: string;
		id: string;
		description: string;
		icon: string;
		sortnum: number;
		entries: {
			[x: string]: PatchouliEntry;
		};
	}

	interface PatchouliEntry {
		category: string;
		icon: string;
		name: string;
		pages: Array<PatchouliPage>;
	}

	interface Item {
		item: string;
	}

	interface Tag {
		tag: string;
	}

	interface Recipe {
		type: 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless';
	}

	interface ShapedRecipe extends Recipe {
		type: 'minecraft:crafting_shaped';
		key: {
			[x: string]: Item | Tag;
		};
		pattern: Array<string>;
		result: Item;
	}

	interface ShapelessRecipe extends Recipe {
		type: 'minecraft:crafting_shapeless';
		ingredients: Array<Item | Tag>;
		result: Item;
	}

	interface PatchouliStore {
		[x: string]: PatchouliCategory;
	}

	interface RecipeDictionary {
		[x: string]: string;
	}

	export interface TextureDictionary {
		[x: string]: string;
	}

	export interface MinecraftLanguageDictionary {
		[x: string]: string;
	}
}
