import { memo, useMemo } from "react";
import { useLandingContext } from "../../hooks/useLandingHook";
import {Hero,MovieDescription,Movies} from '../index'
const Content = () => {
  const { step } = useLandingContext();
  const handleContentList = useMemo(() => {
  switch (step) {
    case 1:
      return <Hero/>;
    case 2:
      return <MovieDescription/>
    case 3:
     return <Movies/>
    default:<></>
      break;
  }
  }, [step]);
  return <>{handleContentList}</>;
};
export default memo(Content);
