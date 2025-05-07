import React, { useEffect } from "react";
import { useLocationActions, useLocationState } from "../../providers/location-provider";

const LocationComponent = () => {
  const { getLocation } = useLocationActions();
  const { location, isPending, isSuccess, isError } = useLocationState();

  useEffect(() => {
    // Automatically trigger location request when the component mounts
    getLocation();
  }, [getLocation]);

  return (
    <div>
      {isPending && <p>Loading location...</p>}
      {isSuccess && location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      {isError && (
        <p>Failed to fetch location. Please enable location access.</p>
      )}
    </div>
  );
};

export default LocationComponent;
