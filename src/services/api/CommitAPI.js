import axios from "axios";




const API_URL =
  "https://api.github.com/repos/crnogorac-luka/my-react-calendar/commits";

const fetchCommits = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchCommits;
