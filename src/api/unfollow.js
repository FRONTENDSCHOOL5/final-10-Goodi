const unfollowAPI = async (accountname, token) => {
  try {
    const unfollow_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}/unfollow`
    const response = await fetch(unfollow_URL, {
      method: 'DELETE',
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

export default unfollowAPI;