import React from "react";
import { Button } from "react-scroll";
import {
  Img,
  ImgWrap,
  BtnWrap,
  Column1,
  Column2,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSectionStyle";

export const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrap>
                <Button to="home" />
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
