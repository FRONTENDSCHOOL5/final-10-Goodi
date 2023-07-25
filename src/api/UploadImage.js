const IMAGE_URL = "https://api.mandarin.weniv.co.kr/image/uploadfile"

const PostImageAPI = async (file) => {

    const formData = new FormData();
    formData.append("image", file); // 파일을 FormData에 추가
    try {
        const response = await fetch(IMAGE_URL, {
            method: "POST",
            body: formData,
        })

        const data = await response.json();

        return data.filename;

    } catch (error) {
        console.log("이미지 업로드 오류", error)
    }
}

export default PostImageAPI;