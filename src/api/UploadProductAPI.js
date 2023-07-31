// const POSTPRODUCT_API = "https://api.mandarin.weniv.co.kr/product"

// const postProductAPI = async (postProductData, token) => {
//   console.log(postProductData)
//   try {
//     const response = await fetch(POSTPRODUCT_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ ...postProductData })
//     })
//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.log("Product API 에러가 발생했습니다", error);
//   }
// };

// export default postProductAPI;

import axios from 'axios';

const POSTPRODUCT_API = "https://api.mandarin.weniv.co.kr/product";

const postProductAPI = async (postProductData, token) => {
  try {
    const response = await axios.post(POSTPRODUCT_API, postProductData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Product API 에러가 발생했습니다", error);
    throw error;
  }
};

export default postProductAPI;
