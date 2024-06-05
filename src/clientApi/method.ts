import * as Transform from "@/clientApi/transform";
import { contentClient } from "./client";
import type { ApiItemWrapper, ApiListWrapper } from "@/Models/umbraco.model";
import type { Product } from "@/Models/product.model";
import type { Person } from "@/Models/person.model";

export const contentApi = {
	getPeople: async () =>
		contentClient
			.get<ApiListWrapper<Person>>("/", {
				params: {
					fetch: "children:e8ad9b65-cff6-4952-ac5b-efe56a60db62",
					take: 100,
				},
			})
			.then(Transform.transformData),
	getPerson: async (id: string) =>
		contentClient.get("/item/" + id).then(Transform.transformData),
	getProducts: async () =>
		contentClient
			.get<ApiListWrapper<Product>>("/", {
				params: {
					fetch: "children:ec4aafcc-0c25-4f25-a8fe-705bfae1d324",
					take: 100,
				},
			})
			.then(Transform.transformData),
	getProduct: async (id: string) =>
		contentClient
			.get<ApiItemWrapper<Product>>("/item/" + id)
			.then(Transform.transformData),
};
