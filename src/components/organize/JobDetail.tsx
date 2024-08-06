import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { dateFormat } from "@/lib/utils";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

const JobDetail: FC = () => {
  const detail = {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus error pariatur quasi reprehenderit voluptatum recusandae optio perferendis culpa architecto. Saepe cupiditate veritatis illo aliquam molestias quae dolore consectetur possimus!",
    responsibility: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus error pariatur quasi reprehenderit voluptatum recusandae optio perferendis culpa architecto. Saepe cupiditate veritatis illo aliquam molestias quae dolore consectetur possimus!",
    whoYouAre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus error pariatur quasi reprehenderit voluptatum recusandae optio perferendis culpa architecto. Saepe cupiditate veritatis illo aliquam molestias quae dolore consectetur possimus!",
    niceToHaves: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis doloribus error pariatur quasi reprehenderit voluptatum recusandae optio perferendis culpa architecto. Saepe cupiditate veritatis illo aliquam molestias quae dolore consectetur possimus!",
    applicants: 1,
    needs: 10,
    dueDate: "2024-08-12",
    datePosted: "2024-07-12",
    jobType: "Full-Time",
    salaryFrom: 1000,
    salaryTo: 2000,
    CategoryJob: { name: "Development" },
    requiredSkills: ["JavaScript", "TypeScript", "MongoDb"],
  };

  const benefits = [
    { benefit: "Health Insurance", description: "Full coverage health insurance." },
    { benefit: "Remote Work", description: "Option to work remotely." },
    { benefit: "Flexible Hours", description: "Flexible working hours." },
    { benefit: "Gym Membership", description: "Free gym membership." },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>{detail.description}</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>{detail.responsibility}</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Who You Are</div>
            <div className="text-gray-500 mt-3">
              <p>{detail.whoYouAre}</p>
            </div>
          </div>
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>{detail.niceToHaves}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl font-semibold">About this role</div>
          <div className="shadow p-3 text-center my-6">
            {detail.applicants}{" "}
            <span className="text-gray-500">of {detail.needs} capacity</span>
            <Progress className="mt-3" value={(detail.applicants / detail.needs) * 100} />
          </div>
          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">{dateFormat(detail.dueDate)}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">{dateFormat(detail.datePosted)}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">{detail.jobType}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">
                ${detail.salaryFrom} - ${detail.salaryTo} USD
              </div>
            </div>
          </div>
          <Separator />
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>
            <div className="space-x-5">
              <Badge>{detail.CategoryJob.name}</Badge>
            </div>
          </div>
          <Separator />
          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>
            <div className="space-x-5">
              {detail.requiredSkills.map((item, i) => (
                <Badge variant="outline" key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          </div>
        </div>
          <Separator className="my-8" />
          <div>
            <div className="text-3xl font-semibold">Perks & Benefits</div>
            <div className="text-gray-500">
              This job comes with several perks and benefits
            </div>
            <div className="grid grid-cols-4 gap-5 mt-9">
              {benefits.map((item, i) => (
                <div key={i}>
                  <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />
                  <div className="text-lg font-semibold mb-3">
                    {item.benefit}
                  </div>
                  <div className="text-gray-500">{item.description}</div>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default JobDetail;
