import React, { useState } from 'react';
import styled from 'styled-components';

// Import types
interface Image {
  url: string;
  filename?: string;
}

interface MyImageProps {
  imgs: Image[];
}

const MyImage: React.FC<MyImageProps> = ({ imgs }) => {
  const [mainImage, setMainImage] = useState<Image>(imgs[0]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>  {/* key should be on the outermost element in map */}
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="box-image--style"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename || "Display Image"} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;