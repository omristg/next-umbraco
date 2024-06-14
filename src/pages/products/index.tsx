import * as React from "react";
import styled from "styled-components";
import { contentApi } from "@/clientApi/method";
import { getImageUrl } from "@/global/utils";
import Image from "next/image";
import Link from "next/link";
import Login from "@/Components/_login";
import type { Product } from "@/Models/product.model";
import type { ApiListWrapper } from "@/Models/umbraco.model";
import type { GetStaticProps } from "next";

type Props = {
	productsWrapper: ApiListWrapper<Product>;
};

const Products = ({ productsWrapper }: Props) => {
	return (
		<Container>
			<Login />
			<h1>Products</h1>
			<ul>
				{productsWrapper.items.map((productWrapper) => {
					const { photos, productName, price } = productWrapper.properties;
					return (
						<li key={productWrapper.id}>
							<Link href={`/products/${productWrapper.id}`}>
								<h2>{productName}</h2>
								<div>{price}</div>
								<Image
									width={300}
									height={300}
									src={getImageUrl(photos[0].url)}
									alt={photos[0].name}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const productsWrapper = await contentApi.getProducts();

	return {
		props: { productsWrapper },
	};
};

const Container = styled.div.attrs({ className: "products-page" })``;

export default Products;
