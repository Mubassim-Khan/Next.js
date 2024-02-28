export default async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
