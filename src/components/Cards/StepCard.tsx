import { FC } from "react";

import Card from "./Card";

type Props = {
  step: number;
  title: string;
  description: string;
  label: string;
  color: string;
};

const StepCard: FC<Props> = ({ step, title, description, label, color }) => (
  <Card>
    <h1
      className={`text-6xl py-1 text-left capitalize font-bold text-${color}`}
    >
      {step}
    </h1>
    <div
      className={`absolute w-10 h-10 rounded-full bg-${color}/20 top-0 left-0 ml-4 mt-3`}
    />
    <p className="text-left text-lg font-medium py-1">{title}</p>
    <div className={`border-2 border-${color} w-16 mb-2`} />
    <p className="text-left text-sm font-medium pt-3 opacity-50">
      {description}
    </p>
    <p
      className={`text-left text-sm font-medium text-${color} capitalize py-3`}
    >
      {label}
    </p>
  </Card>
);

export default StepCard;
