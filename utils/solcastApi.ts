// solcastApi.ts
export async function getSolcastData(latitude: number, longitude: number) {
    const response = await fetch(`/api/solcast?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Solcast data');
    }
    const data = await response.json();
    return data;
  }
  