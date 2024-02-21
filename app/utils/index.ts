export const fetchUsers = async <T>(url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }

  const data = (await res.json()) as T;
  return data;
};
