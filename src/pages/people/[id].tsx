import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import { getImageUrl } from "@/global/utils";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Person } from "@/Models/person.model";
import type { ApiItemWrapper } from "@/Models/umbraco.model";
import { contentApi } from "@/clientApi/method";

type Props = {
	peopleWrapper: ApiItemWrapper<Person>;
};

const PersonItem = ({ peopleWrapper }: Props) => {
	const { photo, email, keywords, department } = peopleWrapper.properties;
	const imageUrl = getImageUrl(photo[0].url);

	return (
		<Container>
			<h1>{peopleWrapper.name}</h1>
			<div>{email}</div>
			<div>{department}</div>
			<Image width={500} height={500} src={imageUrl} alt={photo[0].name} />
			{keywords &&
				keywords.map((keyword) => <div key={keyword}>{keyword}</div>)}
		</Container>
	);
};

const Container = styled.div.attrs({ className: "person-item-page" })``;

export const getStaticPaths: GetStaticPaths = async () => {
	const items = await contentApi.getPeople();

	const paths = items.items.map((item) => ({
		params: { id: item.id },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	if (!id) throw new Error("No id provided");
	const peopleWrapper = await contentApi.getPerson(id);
	return {
		props: { peopleWrapper },
	};
};

export default PersonItem;
