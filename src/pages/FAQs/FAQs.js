import { useState } from "react";
import { faqs } from "../../data/data";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs px-16" id="faqs">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          className="mb-4 pb-4 [&:not(:last-child)]:border-b border-gray-200"
          key={index}
        >
          <h3 onClick={() => toggleAnswer(index)}>
            {openIndex === index ? (
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{ color: "#d4a373" }}
              />
            ) : (
              <KeyboardArrowRightIcon
                fontSize="small"
                sx={{ color: "#d4a373" }}
              />
            )}{" "}
            {faq.question}
          </h3>
          <div
            className={`answer overflow-hidden transition-all duration-500 ease-linear ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{
              transitionProperty: "max-height, opacity",
              maxHeight: openIndex === index ? "500px" : "0",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p className="mt-3 text-justify">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
