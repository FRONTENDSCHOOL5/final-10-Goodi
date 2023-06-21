const likeAPI = async (token, id) => {
  const LIKE_URL = `https://api.mandarin.weniv.co.kr/post/${id}/heart`;

  try {
    const response = await fetch(LIKE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
    });

    const likeData = await response.json();

    if (response.ok) {
      return likeData;
    }
  } catch (error) {
    console.log("likeAPI 에러가 발생했습니다", error);
  }
};

export default likeAPI;

