import axios from "axios";

export type ApiResponseShape = {
  statusCode?: number;
  message?: string;
  data?: string | null;
};

export async function shortenUrl(originalUrl: string) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";
  const linkBaseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:8001";

  const response = await axios.post<ApiResponseShape>(`${apiBaseUrl}/api/url/`, { originalUrl });
  const payload = response.data;

  if (response.status !== 200 || !payload.data) {
    throw new Error(payload.message || "Failed to shorten the URL.");
  }

  return {
    shortCode: payload.data,
    shortUrl: `${linkBaseUrl}/${payload.data}`,
  };
}



interface ClickCountResult {
  count: number;
  createdAt?: string;
}

interface ClickCountApiResponse {
  success: boolean;
  message: string;
  data: ClickCountResult | null;
}


export async function clickCount(shortUrl: string): Promise<ClickCountResult>  {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8001";

  const response = await axios.post<ClickCountApiResponse>(`${apiBaseUrl}/api/url/stats`, { url: shortUrl });

  const payload = response.data;

  if (!payload.data) {
    throw new Error(payload.message || "Failed to get click count.");
  }

  return payload.data
}