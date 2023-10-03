// src/components/LandingPage.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Container, Typography } from "@mui/material";

const center = {
  lat: 37.7749,
  lng: -122.4194, // Replace with your desired center coordinates
};

function LandingPage() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to My Maps App
      </Typography>
      <LoadScript googleMapsApiKey="apikey">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "400px", // Adjust the height as needed
          }}
          center={center}
          zoom={10} // Adjust the initial zoom level as needed
        ></GoogleMap>
      </LoadScript>
    </Container>
  );
}

export default LandingPage;
