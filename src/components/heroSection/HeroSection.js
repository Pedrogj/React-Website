import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  ArrowFoward,
  ArrowRight,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSectionStyle";
import Video from "../../video/video.mp4";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new accout today and receive $250 in credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Get started {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
