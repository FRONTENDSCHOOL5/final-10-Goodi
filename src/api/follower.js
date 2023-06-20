const followerAPI = async (accountname, token) => {
  try {
    const follower_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`
    const response = await fetch(follower_URL, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    })

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
  }
};

export default followerAPI;