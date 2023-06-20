const POSTING_URL = "https://api.mandarin.weniv.co.kr/post";

const postingAPI = async (productData, token) => {
  try {
    const response = await fetch(POSTING_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
    });

    const postPosting = await response.json();

    if (response.ok) {
      return postPosting;
    }
  } catch (error) {
    console.log("Posting API 에러가 발생했습니다", error);
  }
};

export default postingAPI;




// const POSTING_URL = "https://api.mandarin.weniv.co.kr/post";

// const postingAPI = async (token) => {
//   try {
//     const response = await fetch(POSTING_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization" : `Bearer ${token}`,
//       },
//     });

//     const postPosting = await response.json();

//     if (response.ok) {
//       return postPosting;
//     }
//   } catch (error) {
//     console.log("Posting API 에러가 발생했습니다", error);
//   }
// };

// export default postingAPI;

/**
 * 
 */