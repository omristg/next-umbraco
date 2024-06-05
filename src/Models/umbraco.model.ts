export type ApiListWrapper<TModel> = {
	total: number;
	items: ApiItemWrapper<TModel>[];
};

export type ApiItemWrapper<TModel> = {
	contentType: string;
	name: string;
	createDate: string;
	updateDate: string;
	route: {
		path: string;
		startItem: {
			id: string;
			path: string;
		};
	};
	id: string;
	properties: TModel;
	cultures: {};
};

export type Photo = {
	focalPoint: null;
	crops: any[];
	id: string;
	name: string;
	mediaType: string;
	url: string;
	extension: string;
	width: number;
	height: number;
	bytes: number;
	properties: object;
};
