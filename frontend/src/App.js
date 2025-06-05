import React, { useState } from "react";
import LandingPage from "./LandingPage";
import ChatApp from "./ChatApp";
import QuizPage from "./QuizPage";

const App = () => {
  const [page, setPage] = useState("landing");

  if (page === "chat") {
    return <ChatApp />;
  }

  if (page === "quiz") {
    return <QuizPage />;
  }

  return <LandingPage onSelect={setPage} />;
};

export default App;
