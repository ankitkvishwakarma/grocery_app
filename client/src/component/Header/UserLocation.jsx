import { useState, useEffect } from 'react';

function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Optional: Fetch city/country using API (e.g., OpenCage, Google Maps API)
      },
      (err) => {
        setError('Location permission denied or error: ' + err.message);
      }
    );
  }, []);

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {location ? (
        <p>
          📍 Your coordinates: <br />
          Lat: {location.latitude} <br />
          Lng: {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default UserLocation;
