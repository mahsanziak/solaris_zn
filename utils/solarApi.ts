// utils/solarApi.ts
export async function getSolarData() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const latitude = 51.0447; // Latitude for Calgary
    const longitude = -114.0719; // Longitude for Calgary
    const url = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${latitude}&location.longitude=${longitude}&key=${apiKey}`;
  
    console.log('Requesting Solar API for Calgary:', url);
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch solar data');
    }
  
    const data = await response.json();
    console.log('Solar API response:', data);
    return data;
  }
  