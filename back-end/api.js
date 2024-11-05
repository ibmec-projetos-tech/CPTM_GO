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

import express from 'express';
import { estacoes } from './data.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

// Rota para obter a lista de estações
app.get('/api/estacoes', (req, res) => {
    res.json(estacoes);
});

app.get('/api/rota', (req, res) => {
    const { origem, destino } = req.query;

    if (!origem || !destino) {
        return res.status(400).json({ error: 'Origem e destino são necessários.' });
    }
    const rota = {
        origem,
        destino,
        mensagem: `Rota de ${origem} para ${destino} calculada com sucesso!`
    };
    
    res.json(rota);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});