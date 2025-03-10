import axios from "axios";

interface GeocodingResponse {
  results: Array<{
    components: {
      city?: string;
      town?: string;
      village?: string;
    };
  }>;
}

export const userLocation = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (location: GeolocationPosition) => {
          try {
            const latitude = location.coords.latitude;
            const longitude = location.coords.longitude;
            const city = await fetchCityFromLocation(latitude, longitude);
            resolve(city);
          } catch (error) {
            reject(error);
          }
        },
        (err: GeolocationPositionError) => {
          console.error("Error finding the location", err);
          reject(err);
        }
      );
    } else {
      reject(new Error("Geolocation not supported"));
    }
  });
};

const fetchCityFromLocation = async (lat: number, long: number): Promise<string> => {
  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${long}&key=${
      import.meta.env.VITE_GEO_ID
    }`;
    const response = await axios.get<GeocodingResponse>(url);
    
    // Some APIs might return town or village instead of city
    const locationData = response.data.results[0].components;
    return locationData.city || locationData.town || locationData.village || "Unknown location";
  } catch (err) {
    console.error(err);
    throw err;
  }
};