import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch {
        setError("Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Loading...
      </Typography>
    );

  if (error)
    return (
      <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );

  if (!product) return null;

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 620,
        margin: "auto"
      }}
    >
      <Button
        variant="outlined"
        size="small"
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
         Back
      </Button>
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{ width: "100%", maxHeight: 230, objectFit: "contain", mb: 2 }}
      />
      <Typography variant="h5" fontWeight="semibold" gutterBottom color="rgba(83, 83, 83, 1)">
        {product.title}
      </Typography>
      <Typography variant="subtitle1" color="rgba(83, 83, 83, 1)" gutterBottom>
        Category: {product.category}
      </Typography>
      <Typography variant="h5" color="rgba(83, 83, 83, 1)" gutterBottom>
        ${product.price.toFixed(2)}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1.5, lineHeight: 1.3 }} color="text.secondary" >
        {product.description}
      </Typography>
    </Box>
  );
};

export default ProductDetail;
