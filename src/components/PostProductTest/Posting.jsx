import React from 'react'

import * as T from "./commonCss.styled";
import Textarea from '../common/Textarea';
import Button from '../common/Button/Button';

export default function Posting({ handleInputChange, description, handleError }) {
  return (
    <T.ContentUploadWrap>
      <T.InputWrap>
        <T.Label>게시글 내용</T.Label>
        <Textarea
          width="100%"
          height="300px"
          placeholder="게시글 내용을 입력해주세요"
          textCount={description}
          value={description}
          onChange={handleInputChange}
          name="content"
          count="50"
        />
      </T.InputWrap>

      <Button
        type="submit"
        height="56px"
        text={"업로드 하기"}
        br="4px"
        onClick={handleError}
      />
    </T.ContentUploadWrap>
  )
}
