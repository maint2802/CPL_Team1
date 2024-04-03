import axios from "axios";

export async function getUser(id) {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  return res.data;
}
