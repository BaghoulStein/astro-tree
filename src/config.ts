export const SITE = {
	title: 'Mariners Programming Repo',
	description: 'I will murder a child.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://imgur.com/ntFP8Yt?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	// Hebrew: 'he',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/BaghoulStein/astro-tree`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/2kRSVjfpWb`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Basics': [
			{ text: 'Data Types', link: 'en/data-types' },
			{ text: 'If Statements', link: 'en/if-statements'},
			{ text: 'Loops', link: 'en/loops'},
			{ text: "Functions", link: 'en/functions'},
			{ text: 'Excersises', link: 'en/basic-excersises'},
			// { text: 'Page 3', link: 'en/page-3' },
		],
		'OOP' : [
			{ text: 'Classes', link: 'en/classes' },
			{ text: 'Encapsulation', link: 'en/encapsulation'},
			{ text: 'OOP Excersises', link: 'en/basic-oop-excersises'}
		]
		// 'Non-Mandatory Topics': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
