
import * as Transform from "@/clientApi/transform";
import { contentClient } from "./client";
import type { Person } from "@/Models/person.model";
import type { ApiListWrapper } from "@/Models/umbraco.model";


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
};
