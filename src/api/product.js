// const productAPI = async (token, id) => {
//     try {
//         const PRODUCT_URL = `https://api.mandarin.weniv.co.kr/product/detail/${id}`
//         const response = await fetch(PRODUCT_URL, {
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${token}`,
//                 "Content-type": "application/json"
//             }
//         })

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Account API 에러가 발생했습니다", error);
//     }
// };

// export default productAPI;

import axios from 'axios';

const productAPI = async (token, id) => {
  try {
    const PRODUCT_URL = `https://api.mandarin.weniv.co.kr/product/detail/${id}`;
    const response = await axios.get(PRODUCT_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Account API 에러가 발생했습니다', error);
    throw error;
  }
};

export default productAPI;
