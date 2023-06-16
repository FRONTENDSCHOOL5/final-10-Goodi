const JOIN_URL = "https://api.mandarin.weniv.co.kr/user"

const joinAPI = async (joinData) => {
  try {
    const response = await fetch(JOIN_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...joinData }),
    })

    const accountData = await response.json();

    if (response.ok) {
      return accountData;
    }

  } catch (error) {
    console.log('Account API 에러가 발생했습니다', error);
  }
};

export default joinAPI;
// test 계정 정보 : suritest@test.com / suritest