const GOOGLE_MAPS_API = "AIzaSyBE0vU-XujnscFKsc7cZuvE8sJovgo5ECc";

const origin = 'São Paulo, Brazil';
const destination = 'Rio de Janeiro, Brazil';

const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=driving&key=${GOOGLE_MAPS_API}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Route data:', data);
    if (data.status === 'OK') {
      const route = data.routes[0];
      console.log('Total distance:', route.legs[0].distance.text);
      console.log('Estimated duration:', route.legs[0].duration.text);
      console.log('Start address:', route.legs[0].start_address);
      console.log('End address:', route.legs[0].end_address);
    } else {
      console.error('Error fetching directions:', data.status);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
