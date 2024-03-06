import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: "Chicago, IL",
      destination: "Los Angeles, CA",
      travelMode: "WALKING",
      provideRouteAlternatives: false,
      transitOptions: {
        departureTime: new Date(1337675679473),
        modes: ["BUS"],
      },
    };
    directionsService.route(request, (result) => {
      console.log(result);
    });
  }, []);

  return <div></div>;
};

export default App;
