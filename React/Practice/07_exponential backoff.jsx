const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Http status error");

    const data = await res.json();
    return data;
  } catch (error) {
    if (retries === 0) throw error;

    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, retries - 1, delay * 2);
  }
};
