import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "🤔", // Add your desired icon here
      description: "What is your purpose? Define your mission and vision.",
    },
    {
      id: 2,
      icon: "✍️",
      description: "Share your personal anecdotes and influential moments.",
    },
    {
      id: 3,
      icon: "🎯",
      description: "Identify your core values and guiding principles.",
    },
    {
      id: 4,
      icon: "🌍",
      description: "Describe the impact you aim to create and for whom.",
    },
    {
      id: 5,
      icon: "🔨",
      description:
        "Outline the specific actions and initiatives you will take.",
    },
    {
      id: 6,
      icon: "🚀",
      description: "Launch your purpose journey and inspire others!",
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
              <div className='rounded-full bg-blue-500 text-white text-4xl w-16 h-16 flex items-center justify-center mx-auto mb-4'>
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
