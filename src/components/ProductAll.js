import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom/dist";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";

  const getProducts = async () => {
    const url = ` https://my-json-server.typicode.com/jbinyim/musinsa-project/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
