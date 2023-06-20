const followerAPI = async (accountname, token) => {
  try {
    const follower_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower?skip=2`
    const response = await fetch(follower_URL, {
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

export default followerAPI;