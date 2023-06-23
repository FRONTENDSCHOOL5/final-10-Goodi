const deletePostAPI = async (id, token) => {
    const DELETEPOST_URL = `https://api.mandarin.weniv.co.kr/post/${id}`

    try {
        const response = await fetch(DELETEPOST_URL, {
            method: "DELETE",
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
}

export default deletePostAPI;