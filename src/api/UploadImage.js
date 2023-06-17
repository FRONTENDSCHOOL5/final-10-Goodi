const IMAGE_URL = "https://api.mandarin.weniv.co.kr/image/uploadfile"

const PostImageAPI = async (file) => {
    console.log(file)

    const formData = new FormData();
    formData.append("image", file); // 파일을 FormData에 추가
    try {
        const response = await fetch(IMAGE_URL, {
            method: "POST",
            // headers: {
            //     "Content-type": "multipart/form-data",
            // },
            //! // 주의: Content-Type은 브라우저가 자동으로 설정하므로 제거해야 합니다.
            body: formData,
        })

        const data = await response.json();
        return data.filename;

    } catch (error) {
        console.log("이미지 업로드 오류", error)
    }
}

export default PostImageAPI;