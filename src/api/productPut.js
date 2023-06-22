const productPut = async (product_id, token, productData) => {
  try {
    const PRODUCTPUT = `https://api.mandarin.weniv.co.kr/product/${product_id}`

    const response = await fetch(PRODUCTPUT, {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('상품 게시글 수정에 실패했습니다.');
    }

    // 프로필 수정이 성공한 경우
    console.log('상품 게시글이 성공적으로 수정되었습니다.');
  } catch (error) {
    console.error('상품 게시글 수정 오류:', error);
  }
};

export default productPut;
