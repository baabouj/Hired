import Link from "next/link";
import { FC } from "react";

import { VscLinkExternal } from "react-icons/vsc";
import BACKEND_API_URL from "../../constants/backend-api-url";
import { Job } from "../../types";

import Card from "./Card";

type Props = {
  job: Job;
};

const JobCard: FC<Props> = ({
  job: { id, position, salary, type, category, company, location },
}) => {
  return (
    <Card>
      <Link href={`/jobs/${id}`} passHref>
        <a>
          <div className="flex justify-between">
            <div>
              <p className="text-left text-xs bg-purple-500/20 text-purple-500 capitalize w-fit rounded-xl py-1 px-2">
                {category.name}
              </p>
              <h1 className="text-lg py-2 text-left capitalize font-medium">
                {position}
              </h1>
            </div>
            <VscLinkExternal className="text-2xl text-primary" />
          </div>
          <div className="flex items-center pb-2 font-body text-gray-500">
            <p className="text-left text-sm">${salary}</p>
            <div className="w-1 h-1 bg-gray-500 rounded-full mx-2" />
            <p className="text-left text-sm capitalize">{type}</p>
          </div>
          <div className="flex items-center font-body pt-2">
            <img
              src={`${BACKEND_API_URL}/users/${company.id}/avatar`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div className="space-y-1">
              <p className="text-left text-sm font-medium">{company.name}</p>
              <p className="text-left text-sm capitalize text-gray-500">
                {location}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default JobCard;
