const putPostingAPI = async (token, id, putData) => {
    const PUTPOSTING_URL = `https://api.mandarin.weniv.co.kr/post/${id}`
    try {
        const response = await fetch(PUTPOSTING_URL, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ ...putData }),
        })

        const putPostingData = await response.json();
        return putPostingData
    } catch (error) {
        console.error("Account API 에러가 발생했습니다", error);
    }
}

export default putPostingAPI;