export type LinkValue = "home" | "about" | "projects" | "books";

export type Link = {
	name: string;
	value: LinkValue;
	link: string;
};

export default [
	{ name: "Home", value: "home", link: "/" },
	{ name: "About", value: "about", link: "/about" },
	{ name: "Projects", value: "projects", link: "projects" },
	{ name: "Books", value: "books", link: "/books" },
] as Array<Link>;
