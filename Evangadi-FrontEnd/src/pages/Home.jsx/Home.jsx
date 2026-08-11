import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axiosBase from "../../Utility/axios";
import LayOuts from "../../Components/LayOut/LayOuts";

function Home() {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const token = localStorage.getItem("token");

  // Get logged-in user
  const getUser = async () => {
    try {
      const { data } = await axiosBase.get("/users/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
    } catch (error) {
      console.error("Failed to get user:", error);
      setErrorMsg("Unable to load your account information.");
    }
  };

  // Get all questions

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setErrorMsg("Please login to continue.");
      return;
    }

    const fetchData = async () => {
      await Promise.all([getUser()]);
    };

    fetchData();
  }, [token]);

  return (
    <LayOuts>
      <main className="min-h-screen bg-[#f5f5f5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
            {/* Ask Question Button */}
            <Link
              to="/ask-question"
              className="inline-flex items-center justify-center gap-2 w-full md:w-[200px] px-5 py-3
                bg-[#2600ff]
                hover:bg-[#fe8402]
                text-white
                text-base
                font-semibold
                rounded-md transition duration-300
              "
            >
              <i className="ri-question-answer-line text-xl"></i>
              Ask Question
            </Link>

            {/* Welcome Message */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Welcome,
              <span className="ml-2 text-pink-600 capitalize">
                {user?.userName || "User"}
              </span>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-6 rounded-md bg-red-100 border border-red-300 px-4 py-3 text-center text-red-600">
              {errorMsg}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <i className="ri-loader-4-line text-4xl text-[#2600ff] animate-spin"></i>
                <p className="mt-3 text-gray-600">Loading questions...</p>
              </div>
            </div>
          )}

          {/* No Questions */}
          {!loading && !errorMsg && questions.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">
              <i className="ri-question-line text-6xl text-gray-400"></i>

              <h2 className="mt-4 text-2xl font-bold text-gray-700">
                No Questions Yet
              </h2>

              <p className="mt-2 text-gray-500">
                Be the first person to ask a question.
              </p>

              <Link
                to="/ask-question"
                className="
                  inline-block
                  mt-6
                  px-6
                  py-3
                  bg-[#2600ff]
                  hover:bg-[#fe8402]
                  text-white
                  rounded-md
                  font-semibold
                  transition
                  duration-300
                "
              >
                Ask Your First Question
              </Link>
            </div>
          )}

          {/* Questions */}
          {!loading && questions.length > 0 && (
            <div className="space-y-4">
              {questions.map((question) => (
                <Link
                  key={question.questionId}
                  to={`/questions/${question.questionId}`}
                  className="
                    group
                    block
                    bg-white
                    rounded-xl
                    border
                    border-gray-200
                    shadow-sm
                    hover:shadow-md
                    hover:bg-[#fafafa]
                    transition
                    duration-300
                  "
                >
                  <div
                    className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    gap-5
                    p-5
                    sm:p-6
                  "
                  >
                    {/* User */}
                    <div
                      className="
                      flex
                      sm:flex-col
                      items-center
                      sm:justify-center
                      gap-3
                      sm:w-[18%]
                      text-center
                    "
                    >
                      <i
                        className="
                        ri-account-circle-fill
                        text-6xl
                        text-[#312f38]
                        group-hover:text-[#fe8402]
                        transition
                        duration-300
                      "
                      ></i>

                      <p
                        className="
                        font-semibold
                        text-gray-700
                        break-all
                      "
                      >
                        {question.userName}
                      </p>
                    </div>

                    {/* Question Title */}
                    <div className="flex-1">
                      <p
                        className="
                        text-sm
                        text-gray-400
                        mb-1
                      "
                      >
                        Question
                      </p>

                      <h2
                        className="
                        text-lg
                        sm:text-xl
                        font-semibold
                        text-gray-800
                        group-hover:text-[#fe8402]
                        transition
                        duration-300
                      "
                      >
                        {question.title}
                      </h2>

                      {question.tag && (
                        <span
                          className="
                          inline-block
                          mt-3
                          px-3
                          py-1
                          text-xs
                          font-medium
                          bg-gray-100
                          text-gray-600
                          rounded-full
                        "
                        >
                          #{question.tag}
                        </span>
                      )}
                    </div>

                    {/* Arrow */}
                    <div
                      className="
                      flex
                      items-center
                      justify-center
                      sm:w-[8%]
                    "
                    >
                      <i
                        className="
                        ri-arrow-right-s-line
                        text-4xl
                        text-gray-400
                        group-hover:text-[#fe8402]
                        group-hover:translate-x-1
                        transition
                        duration-300
                      "
                      ></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </LayOuts>
  );
}

export default Home;
