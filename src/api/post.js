const POST_URL = (accountname) =>
  `https://api.mandarin.weniv.co.kr/post/${accountname}/userpost`;

const postAPI = async ({ token, accountname }) => {
  try {
    const response = await fetch(POST_URL(accountname), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
    });

    const postList = await response.json();

    if (response.ok) {
      return postList;
    }
  } catch (error) {
    console.log("Post API 에러가 발생했습니다", error);
  }
};

export default postAPI;
