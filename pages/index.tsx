import type { NextPage } from "next";
import { Button, CategoryCard, JobCard, Layout, StepCard } from "../components";

import Lottie from "lottie-react";
import hiredAnimation from "../assets/lottie/hired.json";
import companyAnimation from "../assets/lottie/company.json";
import bubblesAnimation from "../assets/lottie/bubbles.json";

import { CgIfDesign, CgNotes } from "react-icons/cg";
import {
  HiOutlineSpeakerphone,
  HiOutlineClipboardList,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { TbAward } from "react-icons/tb";
import axios from "../lib/axios";
import { Job, JobsApiResponse } from "../types";

const Home: NextPage<any> = ({ jobs }) => {
  return (
    <Layout>
      <section className="flex flex-1 flex-col sm:flex-row">
        <div className="flex flex-col flex-1 justify-center items-start">
          <p className="text-sm font-medium font-body text-primary pb-3">
            We are helping you
          </p>
          <h1 className="text-4xl py-1 capitalize font-bold text-gray-800">
            Find your <span className="text-primary">dream</span> Job
          </h1>
          <h1 className="text-4xl py-1 capitalize font-bold text-gray-800">
            Is Super <span className="text-secondary">Easy</span>
          </h1>
          <h1 className="text-4xl py-1 capitalize font-bold text-gray-800">
            Now.
          </h1>
          <p className="font-medium font-bod py-3 text-left opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            odio amet doloribus deleniti in sit, quo cumque debitis ex
            accusantium eveniet dolores magnam soluta temporibus architecto id
            earum. Repellendus, voluptate!
          </p>
          <Button primary label="Find a job" className="bg-gray-700" />
        </div>
        <div className="flex-1">
          <Lottie animationData={hiredAnimation} loop />
        </div>
      </section>
      <section className="relative flex flex-col justify-center py-8 min-h-screen">
        <Lottie
          animationData={bubblesAnimation}
          loop
          className="absolute blur-3xl"
        />
        <div className="flex flex-col lg:flex-row z-10 w-full lg:justify-between justify-center items-center py-4">
          <div className="">
            <h1 className="text-3xl py-1 text-left capitalize font-semibold text-gray-800">
              How <span className="text-primary">it's work</span> creative
            </h1>
            <h1 className="text-3xl py-1 text-left capitalize font-semibold text-gray-800">
              and quickly feature
            </h1>
          </div>
          <div className="lg:mr-16">
            <p className="text-left text-sm font-medium font-body pb-3 opacity-50">
              find your favorite job and get the
            </p>
            <p className="text-left text-sm font-medium font-body pb-3 opacity-50">
              benefits for yourself
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:justify-between justify-center items-center space-x-8 pt-4">
          <StepCard
            step={1}
            title="Create Account"
            description="First, create an account"
            label="Create account"
            color="purple-500"
          />
          <StepCard
            step={2}
            title="Upload Resume"
            description="Second, upload your resume"
            label="Upload Resume"
            color="green-500"
          />
          <StepCard
            step={3}
            title="Find Job"
            description="Third, search for the right job"
            label="search now"
            color="red-500"
          />
          <StepCard
            step={4}
            title="Apply Job"
            description="Fourth, apply for the job"
            label="apply now"
            color="blue-500"
          />
        </div>
      </section>
      <section className="relative flex flex-col justify-center py-8 min-h-screen">
        <Lottie
          animationData={bubblesAnimation}
          loop
          className="absolute blur-3xl right-0"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl py-1 capitalize font-semibold text-gray-800">
            Browse jobs by <span className="text-primary">categories</span>
          </h1>
          <p className="text-sm font-medium font-body py-3 opacity-50 w-3/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            placeat amet cumque officiis! Possimus obcaecati ullam iste
            inventore vitae.
          </p>
        </div>
        <div className="grid lg:grid-cols-6 justify-center items-center gap-7 py-6">
          <CategoryCard
            name="Design & Development"
            icon={CgIfDesign}
            color="green-500"
          />
          <CategoryCard
            name="Writing & Translation"
            icon={CgNotes}
            color="yellow-500"
          />
          <CategoryCard
            name="Marketing Communication"
            icon={HiOutlineSpeakerphone}
            color="purple-500"
          />
          <CategoryCard
            name="Human Resources"
            icon={BsPeople}
            color="sky-500"
          />
          <CategoryCard
            name="Project Management"
            icon={HiOutlineClipboardList}
            color="red-500"
          />
          <CategoryCard
            name="Education & Learning"
            icon={FaGraduationCap}
            color="blue-500"
          />
        </div>
        <Button primary label="see more &rarr;" className="self-center" />
      </section>
      <section className="relative flex flex-col justify-center py-8 min-h-screen">
        <Lottie
          animationData={bubblesAnimation}
          loop
          className="absolute blur-3xl"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl py-1 capitalize font-semibold text-gray-800">
            Latest job <span className="text-primary">posts</span>
          </h1>
          <p className="text-sm font-medium font-body pt-3 opacity-50 w-3/5">
            Explore the different types of jobs available to apply
          </p>
          <p className="text-sm font-medium font-body pb-3 opacity-50 w-3/5">
            and discover the right one for you.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 gap-x-12 gap-y-8 py-6">
          {jobs.map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <Button
          primary
          href="/jobs"
          label="see more &rarr;"
          className="self-center"
        />
      </section>
      <section className="relative flex justify-center items-center py-8 min-h-screen">
        <div className="flex flex-col flex-1 w-1/2 justify-center items-start">
          <h1 className="text-3xl py-1 capitalize font-semibold text-gray-800">
            We help not <span className="text-primary">one</span>,
          </h1>
          <h1 className="text-3xl py-1 capitalize font-semibold text-gray-800">
            but <span className="text-secondary">many</span> companies.
          </h1>
          <p className="text-left pt-2 pb-8 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            rem at consequatur reprehenderit a vero magnam cupiditate aliquam
            ipsum, tempora veniam laudantium beatae deserunt ex? Odio repellat
            voluptatum soluta sapiente!
          </p>
          <div className="grid grid-cols-2 gap-4 my-auto">
            <div className="flex items-center">
              <div className="bg-yellow-500/20 p-1 rounded-lg">
                <TbAward className="text-yellow-500 text-2xl" />
              </div>
              <div className="flex flex-col items-start py-2 px-4">
                <h2 className=" font-medium">Special expat rates</h2>
                <p className="text-gray-500 text-sm">
                  very tempting both in terms
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500/20 p-1 rounded-lg">
                <HiOutlineCurrencyDollar className="text-green-500 text-2xl" />
              </div>
              <div className="flex flex-col items-start py-2 px-4">
                <h2 className=" font-medium">Work life balance</h2>
                <p className="text-gray-500 text-sm">
                  very tempting both in terms
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-sky-500/20 p-1 rounded-lg">
                <HiOutlineClock className="text-sky-500 text-2xl" />
              </div>
              <div className="flex flex-col items-start py-2 px-4">
                <h2 className=" font-medium">24/7 Customer services</h2>
                <p className="text-gray-500 text-sm">
                  very tempting both in terms
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-500/20 p-1 rounded-lg">
                <HiOutlineClipboardList className="text-red-500 text-2xl" />
              </div>
              <div className="flex flex-col items-start py-2 px-4">
                <h2 className=" font-medium">No paperwork</h2>
                <p className="text-gray-500 text-sm">
                  very tempting both in terms
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={companyAnimation} loop />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  let {
    data: { data: jobs },
  }: { data: JobsApiResponse } = await axios("/jobs?take=6");

  for (let index = 0; index < jobs.length; index++) {
    const { data: category } = await axios(
      `/categories/${jobs[index].category_id}`
    );
    jobs[index].category = category;

    const { data: company } = await axios(`/users/${jobs[index].company_id}`);
    company.id = jobs[index].company_id;
    jobs[index].company = company;
  }

  return {
    props: {
      jobs,
    },
  };
}
