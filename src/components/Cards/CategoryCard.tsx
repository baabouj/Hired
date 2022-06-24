import { FC } from "react";
import { IconType } from "react-icons";

import Card from "./Card";

type Props = {
  name: string;
  icon: IconType;
  color: string;
};

const CategoryCard: FC<Props> = ({ name, icon: Icon, color }) => {
  return (
    <Card>
      <div className={`bg-${color}/20 rounded-lg p-2 w-fit`}>
        <Icon className={`text-2xl text-${color}`} />
      </div>
      <p className="text-left text-lg font-medium py-2">{name}</p>
      <p className="text-left text-xs text-gray-400 font-medium capitalize">
        15k+ post jobs
      </p>
    </Card>
  );
};

export default CategoryCard;
