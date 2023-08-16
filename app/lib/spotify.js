const BASE64_ENCODE = process.env.BASE64_ENCODE;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const getToken = async () => {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    {
      headers: {
        Authorization: `Basic ${process.env.BASE64_ENCODE}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};
