import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";
const searchImages = async query => {
  const res = await axios.get(URL, {
    headers: {
      Authorization: "Client-ID T36CAqiaKryDBR0Ts8Idpb5Udw_CW8-eH-o9glPsieo",
    },
    params: {
      query: query,
    },
  });

  return res.data.results;
};

export default searchImages;
