import React from "react";
import iconBlacklist from "../assets/icon-blacklist.svg";
import iconText from "../assets/icon-text.svg";
import iconPreview from "../assets/icon-preview.svg";

const Workflow = () => {
  const workflowItems = [
    {
      id: 1,
      icon: iconBlacklist,
      title: "Create blacklists",
      description:
        "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
      id: 2,
      icon: iconText,
      title: "Plain text snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      id: 3,
      icon: iconPreview,
      title: "Sneak preview",
      description:
        "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  return (
    <section className="mt-24 pb-20 flex flex-col items-center text-center px-6 lg:px-0 mx-auto container">
      <div>
        <h1 className="text-Gray700 text-[28px] sm:text-[36px] font-bold">
          Supercharge your workflow
        </h1>
        <p className="text-Gray500 mt-4 sm:text-[18px] px-4 lg:max-w-[720px] mx-auto">
          We've got the tools to boost your productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
        {workflowItems.map((item) => (
          <div key={item.id} className="mt-10">
            <img src={item.icon} alt={item.title} className="mx-auto" />
            <h2 className="text-Gray700 text-[24px] font-bold mt-6">
              {item.title}
            </h2>
            <p className="text-Gray500 mt-4 sm:text-[16px] px-4 max-w-[350px] mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
