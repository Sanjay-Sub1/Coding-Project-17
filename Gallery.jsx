import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://course-api.com/react-tours-project");
        const data = await response.json();

        if (Array.isArray(data)) {
          setTours(data);
        } else {
          setError("Data format is incorrect");
        }

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tours");
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {tours.length === 0 ? (
        <p>No tours available</p>
      ) : (
        tours.map((tour) => (
          <div key={tour.id} className="tour-card" style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={tour.image} alt={tour.name} style={{ width: "100%", maxWidth: "400px", marginBottom: "10px" }} />
            <h3>{tour.name}</h3>
            <p>{tour.price}</p>
            <p>{tour.description}</p>
            <button>Read More</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Gallery;
