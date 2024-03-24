const baseUrl = process.env.EXPO_PUBLIC_API_URL;

async function get(url: string) {
  const requestOptions = {
    method: 'GET',
    header: await getHeaders(),
  };
  const response = await fetch(baseUrl + url, requestOptions);
  return await handleResponse(response);
}

async function getHeaders() {
  const headers = { 'Content-type': 'application/json' } as any;
  return headers;
}

async function handleResponse(response: Response) {
  const text = await response.text();
  // const data = text && JSON.parse(text);
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    data = text;
  }

  if (response.ok) {
    return data || response.statusText;
  } else {
    const error = {
      status: response.status,
      message: typeof data === 'string' && data.length > 0 ? data : response.statusText,
    };
    return { error };
  }
}

export const fetchWrapper = {
  get,
};
