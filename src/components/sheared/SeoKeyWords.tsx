import React from "react";

type SeoKeyWordsProps = {
  title: string;
  wordList: string[];
};

const SeoKeyWords = ({ title, wordList }: SeoKeyWordsProps) => {
  return (
    <div className="text-start mr-4">
      <div className="font-bold text-3xl my-4">{title}</div>
      <div>
        {wordList.map((word) => (
          <div key={word}>{word}</div>
        ))}
      </div>
    </div>
  );
};

export default SeoKeyWords;
