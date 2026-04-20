import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithQuery = async (q, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: q,
      page,
      per_page: 10,
    },
    headers: {
      Authorization: "Client-ID bDh9uYzZ7VuZKkeTRPNGtBwx5dQAUH58PYj7B95x4qw",
    },
  });

  return response.data;
};
