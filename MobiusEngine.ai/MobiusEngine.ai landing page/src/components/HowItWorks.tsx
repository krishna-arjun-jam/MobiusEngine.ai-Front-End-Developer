
const steps = [
  {
    number: 1,
    title: "Submit Intake Form",
    description: ""
  },
  {
    number: 2,
    title: "We do the search and curation for list of jobs",
    description: ""
  },
  {
    number: 3,
    title: "You approve, we do the tedious part (applying)",
    description: ""
  },
  {
    number: 4,
    title: "You get the interviews",
    description: ""
  }
];

const HowItWorks = () => {
  return (
    <div className="bg-white w-full py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold text-blue-600 mb-12">How we work?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold">{step.number}</span>
            </div>
            <div className="w-full h-0.5 bg-blue-600"></div>
            <p className="text-blue-600 mt-4 text-center font-medium">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
