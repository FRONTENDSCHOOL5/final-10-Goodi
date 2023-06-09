const productGetAPI = async (accountname, token) => {
  try {
    const productGet_URL = `https://api.mandarin.weniv.co.kr/product/${accountname}`
    const response = await fetch(productGet_URL, {
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

export default productGetAPI;