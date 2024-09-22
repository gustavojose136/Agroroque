export const API_URL = process.env.API_URL;

export async function fetchData(endpoint: string, token: string) {
  const res = await fetch(`${API_URL}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}