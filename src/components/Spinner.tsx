import { FC } from "react";

import Lottie from "lottie-react";

import loadingAnimation from "../assets/lottie/loading.json";

const Spinner: FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <Lottie animationData={loadingAnimation} loop className="w-40" />
    </div>
  );
};

export default Spinner;
