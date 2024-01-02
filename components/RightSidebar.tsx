import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: "1", title: "lorem lorem  lorem lorem lorem lorem" },
  { _id: "2", title: "lorem lorem lorem lorem lorem lorem" },
  { _id: "3", title: "lorem lorem lorem lorem lorem lorem" },
  { _id: "4", title: "lorem lorem lorem lorem lorem lorem" },
];

const popularTags = [
  { _id: "1", name: "javascript", totalQuestions: 4 },
  { _id: "2", name: "react", totalQuestions: 3 },
  { _id: "3", name: "typescript", totalQuestions: 5 },
  { _id: "4", name: "go", totalQuestions: 2 },
  { _id: "5", name: "java", totalQuestions: 4 },
];

const RightSidebar = () => {
  return (
    <div className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-r p-6 pt-36 shadow-light-400 max-xl:hidden max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron right"
                className="invert-colors"
                height={20}
                width={20}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
