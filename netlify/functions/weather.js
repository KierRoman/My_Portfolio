export async function handler(event) {
  const API_KEY = process.env.WEATHER_API_KEY; // Set this in Netlify env
  const { lat, lon } = event.queryStringParameters;
console.log("Using WEATHER_API_KEY:", process.env.WEATHER_API_KEY ? "Yes" : "No");
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key is missing" }),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }

  if (!lat || !lon) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing lat or lon parameters" }),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      // Handle HTTP errors from OpenWeather API
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: `OpenWeather API error: ${res.statusText}` }),
        headers: { "Access-Control-Allow-Origin": "*" },
      };
    }

    const data = await res.json();
    console.log("OpenWeather data:", data);

    // Basic validation on expected data
    if (
      !data ||
      !data.main ||
      typeof data.main.temp === "undefined" ||
      !data.weather ||
      !Array.isArray(data.weather) ||
      data.weather.length === 0
    ) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Invalid data received from weather API" }),
        headers: { "Access-Control-Allow-Origin": "*" },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.error("Fetch error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Weather fetch failed" }),
      headers: { "Access-Control-Allow-Origin": "*" },
    };
  }
}