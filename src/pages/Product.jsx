import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; 
import { auth } from '../config/firebase/firebaseconfig'; 
import Card from '../components/Card'; 
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(true);
        setLoading(false); 
      });
  }, []);

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`); 
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error("Error logging out:", error);
    });
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        textAlign: 'center',
      }}>
        <CircularProgress size={100} />
        <Typography variant="h6" sx={{ marginTop: 2 }} aria-live="polite">
          Loading products...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Typography color="error" style={{ textAlign: 'center', margin:'auto' }}>
        Error loading products. Please try again later.
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom color="primary" fontWeight="bold" align="center" sx={{ marginTop: '16px' }}>
        Products
      </Typography>
      <Button 
        variant="contained" 
        className="btn btn-danger"
        onClick={logoutUser} 
        sx={{ marginBottom: 2, display: 'block', mx: 'auto' }}
      >
        Logout
      </Button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
        {products.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            description={item.description.slice(0, 50) + "..."}
            src={item.images[0]}
            onClick={() => handleProductClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
