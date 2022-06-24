import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import { JobCard, Layout, Pagination, Spinner } from "../../components";
import axios from "../../lib/axios";
import { Job, JobsApiResponse } from "../../types";

const fetchData = async (page: number): Promise<JobsApiResponse> => {
  let { data }: { data: JobsApiResponse } = await axios(
    `http://localhost:8080/api/jobs?page=${page}&take=6`
  );

  for (let index = 0; index < data.data.length; index++) {
    const { data: category } = await axios(
      `/categories/${data.data[index].category_id}`
    );
    data.data[index].category = category;

    const { data: company } = await axios(
      `/users/${data.data[index].company_id}`
    );
    company.id = data.data[index].company_id;
    data.data[index].company = company;
  }

  return data;
};

const Jobs: NextPage<{ data: JobsApiResponse }> = (props) => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    ["jobs", { page }],
    () => fetchData(page),
    {
      initialData: props.data,
      keepPreviousData: true,
    }
  );

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3 grid-rows-2 gap-x-12 gap-y-8 py-6">
          {data?.data?.map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
      <Pagination
        info={data?.info}
        page={page}
        setPage={(page) => setPage(page)}
      />
    </Layout>
  );
};

export default Jobs;

export async function getServerSideProps() {
  const data = await fetchData(1);

  return {
    props: {
      data,
    },
  };
}
