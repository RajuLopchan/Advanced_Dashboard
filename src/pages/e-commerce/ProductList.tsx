import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4, color: "text.secondary" }}>
        Loading products...
      </Typography>
    );

  if (error)
    return (
      <Typography color="error" variant="h6" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );

  return (
    <Box sx={{ p: 4, display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "flex-start" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          onClick={() => navigate(`/ecommerce/products/${product.id}`)}
          sx={{
            width: 260,
            borderRadius: 2,
            cursor: "pointer",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "transform 0.2s ease",
             bgcolor: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{ width: 140, height: 140, objectFit: "contain", mb: 2 }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              mb: 0.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "3em",
            }}
            title={product.title}
          >
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: 13 }}>
            {product.category}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "primary.main" }}>
            ${product.price.toFixed(2)}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default ProductList;
