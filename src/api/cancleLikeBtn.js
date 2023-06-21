const cancleLikeAPI = async (token, id) => {
  const CANCLELIKE_URL = `https://api.mandarin.weniv.co.kr/post/${id}/unheart`;

  try {
    const response = await fetch(CANCLELIKE_URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
    });

    const cancleLikeData = await response.json();

    if (response.ok) {
      return cancleLikeData;
    }
  } catch (error) {
    console.log("cancleLikeAPI 에러가 발생했습니다", error);
  }
};

export default cancleLikeAPI;