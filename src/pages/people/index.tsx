import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { contentApi } from "@/clientApi/method";
import { BASE_URL } from "@/clientApi/client";
import type { Person } from "@/Models/person.model";
import type { ApiListWrapper } from "@/Models/umbraco.model";

export const getImageUrl = (path: string) => BASE_URL + path;

type Props = {
	peopleWrapper: ApiListWrapper<Person>;
};

const People = ({ peopleWrapper }: Props) => {
	return (
		<Container>
			<ul>
				{peopleWrapper.items.map((personWrapper) => {
					const person = personWrapper.properties;
					return (
						<li className="person" key={personWrapper.id}>
							<Link href={`people/${personWrapper.id}`}>
								<h2>{personWrapper.name}</h2>
								<Image
									width={300}
									height={300}
									src={getImageUrl(person.photo[0].url)}
									alt={person.photo[0].name}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export async function getStaticProps() {
	const peopleWrapper = await contentApi.getPeople();
	return {
		props: { peopleWrapper },
	};
}

const Container = styled.div.attrs({ className: "people-page" })`
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		padding-inline-start: unset;
	}

	.person {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;

		h2 {
			margin-bottom: 10px;
		}

		img {
			width: 100%;
			max-width: 300px;
			height: auto;
		}
	}
`;

export default People;
