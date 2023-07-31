import React from "react";
import * as T from "../writingUI.styled";

import { InputBox } from "./../../common/Input";
import Textarea from "./../../common/Textarea";
import Button from "../../common/Button/Button";

export default function ProductWriting({ handleInputChange, data, description, userErrorMessage, handleError }) {
  return (
    <T.ContentUploadWrap>
      <T.InputWrap>
        <T.Label>상품명</T.Label>
        <InputBox
          width="100%"
          height="48px"
          name="itemName"
          placeholder="상품명을 입력해주세요"
          type="text"
          onChange={handleInputChange}
          value={data.itemName}
          hasError={userErrorMessage.includes("상품명을 입력해주세요")}
        />
        {userErrorMessage.includes("상품명을 입력해주세요") && <T.ErrorMassage>상품명을 입력해주세요</T.ErrorMassage>}
      </T.InputWrap>

      <T.InputWrap>
        <T.Label>상품가격</T.Label>
        <InputBox
          width="100%"
          height="48px"
          type="number"
          placeholder="상품가격을 입력해주세요"
          name="price"
          value={data.price}
          onChange={handleInputChange}
          hasError={userErrorMessage.includes("상품가격을 입력해주세요")}
        />
        {userErrorMessage.includes("상품가격을 입력해주세요") && (
          <T.ErrorMassage>상품가격을 입력해주세요</T.ErrorMassage>
        )}
      </T.InputWrap>

      <T.InputWrap>
        <T.Label>상품 설명</T.Label>
        <Textarea
          width="100%"
          height="100px"
          placeholder="상품에 대한 설명을 입력해주세요"
          textCount={description}
          value={description}
          onChange={handleInputChange}
          name="link"
          hasError={userErrorMessage.includes("상품소개글을 입력해주세요")}
        />
        {userErrorMessage.includes("상품소개글을 입력해주세요") && (
          <T.ErrorMassage>상품소개글을 입력해주세요</T.ErrorMassage>
        )}
      </T.InputWrap>

      <Button type="submit" height="56px" text={"상품 업로드 하기"} br="4px" onClick={handleError} />
    </T.ContentUploadWrap>
  );
}
