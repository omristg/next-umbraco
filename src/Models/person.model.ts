import type { Photo } from "./umbraco.model";

export type Person = {
	seoMetaDescription: null;
	keywords: string[];
	umbracoNavihide: boolean;
	photo: Photo[];
	department: string[] | null;
	email: null;
	twitterUsername: null;
	facebookUsername: null;
	linkedInUsername: null;
	instagramUsername: null;
};
