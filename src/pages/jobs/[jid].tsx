import { useState } from "react";

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Button, Layout } from "@/components";
import { useAuth, useAxiosPrivate } from "@/hooks";
import axios from "@/lib/axios";
import { Job } from "@/types";
import BACKEND_API_URL from "@/constants/backend-api-url";

type Props = {
  job: Job;
};

const Job: NextPage<Props> = ({ job }) => {
  const { auth } = useAuth();

  const axiosPrivate = useAxiosPrivate();

  const router = useRouter();

  console.log({ auth });

  const [isApplied, setIsApplied] = useState(false);

  const apply = async () => {
    try {
      await axiosPrivate.post(`${BACKEND_API_URL}/jobs/${job.id}/applications`);
      // setIsApplied(true);
    } catch (e: any) {
      console.log({ e });

      if (e.response.status === 401) {
        router.push("/login");
      }
    }
  };

  return (
    <Layout>
      <div className="flex-1 self-center flex flex-col justify-center items-center w-96">
        <div className="flex">
          <img
            src={`${BACKEND_API_URL}/users/${job.company.id}/avatar`}
            className="w-24 h-24 rounded-2xl m-2"
          />
          <div className="flex flex-col items-start p-2">
            <h1 className="text-xl font-bold font-body w-fit">
              {job.position}
            </h1>
            <h3 className="text-lg font-body font-medium text-gray-500">
              {job.company.name}
            </h3>
            {/* <h3 className="text-lg font-body font-medium text-gray-500">
              {job.company.website}
            </h3> */}
          </div>
        </div>
        <div className="py-2">
          <p className="font-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error
            eum quos repellendus deserunt animi id molestias sequi! Sed,
            aspernatur quod impedit nisi unde voluptates obcaecati consectetur
            voluptatum inventore odio.
          </p>
        </div>
        <Button primary label="Apply" onClick={apply} />
      </div>
    </Layout>
  );
};

export default Job;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: job } = await axios(`/jobs/${context.params?.jid}`);
  const { data: category } = await axios(`/categories/${job.category_id}`);
  job.category = category;

  const { data: company } = await axios(`/users/${job.company_id}`);
  company.id = job.company_id;
  job.company = company;

  return {
    props: {
      job,
    },
  };
};
