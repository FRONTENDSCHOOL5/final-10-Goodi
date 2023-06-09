const searchAPI = async (token, keyword) => {
    const SEARCH_URL = `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`

    try {
        const response = await fetch(SEARCH_URL, {
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
}

export default searchAPI;