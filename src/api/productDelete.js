const productDeleteAPI = async (product_id, token) => {
  try {
    const productDelete_URL = `https://api.mandarin.weniv.co.kr/product/${product_id}`
    const response = await fetch(productDelete_URL, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    })

    const data = await response.json();

    console.log(data)

    return data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
  }
};

export default productDeleteAPI;