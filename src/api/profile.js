const PROFILE_URL = "https://api.mandarin.weniv.co.kr/user/myinfo"

export const profileAPI = async (token) => {
  try {
    const response = await fetch(PROFILE_URL, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
  }
};

export const accountProfileAPI = async (accountname, token) => {
  try {
    const ACCOUNTPROFILE_URL = `https://api.mandarin.weniv.co.kr/profile/${accountname}`
    const response = await fetch(ACCOUNTPROFILE_URL, {
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