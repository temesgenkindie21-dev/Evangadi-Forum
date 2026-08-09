import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LayOuts({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="pt-[80px]">{children}</main>

      <Footer />
    </div>
  );
}

export default LayOuts;
