const PROFILE_URL = "https://api.mandarin.weniv.co.kr/user/myinfo"

const profileAPI = async (token) => {
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

export default profileAPI;
// test 계정 정보 : suritest@test.com / suritest
// test 계정 정보 : wonbeom@weniv.co.kr / 123123