import Footer from "@/components/Footer";
import Header from "@/components/Header";

import React from "react";

function HowItWorks({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HowItWorks;
