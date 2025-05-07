"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocation } from "../../providers/location-provider/context";

const LocationPrompt = () => {
  const router = useRouter();
  const { setLocation } = useLocation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(coords);
        router.push("/nearbyHospitals");
      },
      (error) => {
        alert("Location access is required to show nearby hospitals.");
          router.push("/nearbyHospitals");
          console.log(error)
      }
    );
  }, []);

  return <p>Getting your location...</p>;
};

export default LocationPrompt;
