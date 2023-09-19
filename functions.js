export const getAllTemperatures = async () => {
  const response = await fetch("https://ap-examen.surge.sh/zon.json");
  const data = await response.json();

  return data;
};
getAllTemperatures();
