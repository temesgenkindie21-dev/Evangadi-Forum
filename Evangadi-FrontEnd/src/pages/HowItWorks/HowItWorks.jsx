import React from "react";
import LayOuts from "../../Components/LayOut/LayOuts";

function HowItWorks() {
  const steps = [
    {
      icon: "ri-user-add-line",
      title: "1. Register",
      description:
        "Create an account by providing your first and last name, username, email address, and password. Ensure your username and email are unique.",
    },
    {
      icon: "ri-login-box-line",
      title: "2. Sign In",
      description:
        "Already a member? Log in using your email and password to access your account.",
    },
    {
      icon: "ri-question-line",
      title: "3. Post Questions",
      description:
        "After logging in, navigate to the Questions Page to post your programming-related questions. Include a clear title and detailed explanation.",
    },
    {
      icon: "ri-chat-3-line",
      title: "4. Provide Answers",
      description:
        "Browse questions posted by other users and share your knowledge by answering them. Your username will appear with your answers.",
    },
    {
      icon: "ri-eye-line",
      title: "5. Explore and Evaluate",
      description:
        "Review questions and answers from the community to gain knowledge and help others learn.",
    },
  ];

  return (
    <LayOuts>
      <section className="min-h-screen bg-gradient-to-br from-[#1d3579] to-[#928f8f] py-20 px-5 mt-4">
        <div
          className="
        max-w-6xl 
        mx-auto
        bg-white/20
        backdrop-blur-md
        rounded-2xl
        shadow-xl
        p-8
        text-white
      "
        >
          <h2
            className="
          text-center
          text-4xl
          font-bold
          mb-12
        "
          >
            How it Works
          </h2>

          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
          >
            {steps.map((step) => (
              <div
                key={step.title}
                className="
                bg-white/20
                rounded-xl
                p-6
                text-center
                shadow-md
                transition
                duration-300
                hover:bg-white/30
                hover:-translate-y-2
              "
              >
                <i
                  className={`
                  ${step.icon}
                  text-5xl
                  mb-4
                  inline-block
                `}
                ></i>

                <h3
                  className="
                text-2xl
                font-bold
                mb-3
              "
                >
                  {step.title}
                </h3>

                <p
                  className="
                text-base
                leading-7
                text-gray-100
              "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOuts>
  );
}

export default HowItWorks;
