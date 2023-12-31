import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "🤔", // Add your desired icon here
      description: "What is your purpose?",
    },
    {
      id: 2,
      icon: "✍️",
      description: "Connecting with your purpose.",
    },
    {
      id: 3,
      icon: "🎯",
      description: "Establishing the impact of your purpose.",
    },
    {
      id: 4,
      icon: "🌍",
      description: "Describe the values and beliefs to guide your purpose.",
    },
    {
      id: 5,
      icon: "🔨",
      description: "Identifying the beneficiaries.",
    },
    {
      id: 6,
      icon: "🚀",
      description:
        "Outline the specific actions and initiatives you will take.",
    },
  ];

  return (
    <div className='py-16 bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-8 text-maroon-red'>
          How It Works
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8'>
          {steps.map((step) => (
            <div key={step.id} className='text-center'>
              <div className='rounded-full bg-white border text-white text-xl w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                {step.icon}
              </div>
              <div className='text-lg font-semibold mb-2'>{`Step ${step.id}`}</div>
              <div className='text-gray-600'>{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
