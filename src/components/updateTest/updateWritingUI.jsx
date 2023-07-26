import React from 'react'
import * as T from "../PostProductWriting/writingUI.styled";
import { useLocation, useParams } from 'react-router';

import ImageSection from '../PostProductWriting/ImageSection';
import PostWriting from '../PostProductWriting/PostWriting';
import ProductWriting from '../PostProductWriting/ProductWriting';

export default function updateWritingUI(props) {
  const { src, subtext, getData, data, setData, setImageWrap, imageWrap, userErrorMessage, handleError } = props;

  const location = useLocation();
  const locationID = useParams();

  return (
    <T.PostUiWrap>
      <h2 className="a11y-hidden">업로드 페이지</h2>
      <img src={src} alt={src} />
      <p>{subtext}</p>

      <T.UploadWrap onSubmit={joinData}>
        <ImageSection
          handleInputChange={handleInputChange}
          loading={loading}
          imageWrap={imageWrap}
          userErrorMessage={userErrorMessage}
        />

        <T.Line />

        {location.pathname === `/product/${locationID}` && (
          <PostWriting
            handleInputChange={handleInputChange}
            description={description}
            handleError={handleError}
          />
        )}

        {location.pathname === `/uploadPosting/${locationID}` && (
          <ProductWriting
            data={data}
            handleInputChange={handleInputChange}
            userErrorMessage={userErrorMessage}
            handleError={handleError}
          />
        )}
      </T.UploadWrap>
    </T.PostUiWrap>
  )
}
