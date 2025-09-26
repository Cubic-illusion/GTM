export default function handler(request, response) {
  response.status(200).json({
    apiKey: process.env.API_KEY,
    clientId: process.env.CLIENT_ID,
  });
}
