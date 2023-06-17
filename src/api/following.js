const followingAPI = async (accountname, token) => {
  try {
    const following_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/following`
    const response = await fetch(following_URL, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    })

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
  }
};

export default followingAPI;