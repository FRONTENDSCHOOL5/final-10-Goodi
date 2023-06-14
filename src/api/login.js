const LOGIN_URL = "https://api.mandarin.weniv.co.kr/user/login"

const loginAPI = async (loginData) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...loginData }),
    });

    const accountData = await response.json();

    if (response.ok) {
      return accountData;
    }

  } catch (error) {
    console.log('Account API 에러가 발생했습니다', error);
  }
};

export default loginAPI;
// test 계정 정보 : suritest@test.com / suritest