import * as React from "react";
import { contentApi } from "@/clientApi/method";
import styled from "styled-components";
import { getImageUrl } from "@/global/utils";
import Image from "next/image";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ApiItemWrapper } from "@/Models/umbraco.model";
import type { Product } from "@/Models/product.model";

type Props = {
	productWrapper: ApiItemWrapper<Product>;
};

const ProductItem = ({ productWrapper }: Props) => {
	const { productName, description, price, photos } = productWrapper.properties;
	const imageUrl = getImageUrl(photos[0].url);
	return (
		<Container>
			<h1>{productName}</h1>
			<div>{price}</div>
			<div>{description}</div>
			<div className="image-container">
				<Image src={imageUrl} alt={photos[0].name} width={300} height={300} />
			</div>
		</Container>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { items } = await contentApi.getProducts();
	const paths = items.map((product) => ({
		params: { id: product.id },
	}));
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	const productWrapper = await contentApi.getProduct(id);
	return {
		props: { productWrapper },
	};
};

const Container = styled.div.attrs({ className: "product-item-page" })``;

export default ProductItem;
