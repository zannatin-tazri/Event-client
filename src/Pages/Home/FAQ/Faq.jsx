import { useState } from "react";


const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const questions = [
    'How to make an event 1?',
    'How to make an event 2?',
    'How to make an event 3?',
    'How to make an event 4?'
  ];

  const answers = [
    'Answer for question 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nisi ex dolorem unde incidunt beatae blanditiis inventore iusto odit suscipit, laborum provident molestias, harum perferendis tenetur autem explicabo nobis magnam! ',
    'Answer for question 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nisi ex dolorem unde incidunt beatae blanditiis inventore iusto odit suscipit, laborum provident molestias, harum perferendis tenetur autem explicabo nobis magnam!',
    'Answer for question 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nisi ex dolorem unde incidunt beatae blanditiis inventore iusto odit suscipit, laborum provident molestias, harum perferendis tenetur autem explicabo nobis magnam!',
    'Answer for question 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.Deserunt nisi ex dolorem unde incidunt beatae blanditiis inventore iusto odit suscipit, laborum provident molestias, harum perferendis tenetur autem explicabo nobis magnam!'
  ];

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-28">Frequently Asked Question</h1>
      <div className="hidden sm:block">

        <div className="flex place-content-center mt-5 p-10">
          <div className="lg:w-1/4 w-1/2 pr-5">
            {questions.map((question, index) => (
              <button
                className="block text-lg w-full mb-4 bg-red-500 text-white py-2 px-4 rounded"
                onClick={() => setSelectedQuestion(index)}
                key={index}
              >
                {question}
              </button>
            ))}
          </div>
          <div className="lg:w-1/4 w-1/2 lg:h-56 pl-5 shadow-lg shadow-purple-200 bg-gray-100 p-5 rounded">
            <h3 className="text-red-500 mb-4">{questions[selectedQuestion]}</h3>
            <p className="text-sm">{answers[selectedQuestion]}</p>
          </div>
        </div>
      </div>


      <div className="grid gap-5 sm:hidden max-w-screen-sm w-3/4 mt-14  mx-auto">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;






























