import React from 'react';
import katex from 'katex';

interface MathFormulaProps {
  tex: string;
  block?: boolean;
}

export const MathFormula: React.FC<MathFormulaProps> = ({ tex, block = false }) => {
  const html = katex.renderToString(tex, {
    displayMode: block,
    throwOnError: false,
  });

  return (
    <span
      className={block ? "block text-center my-6 text-xl overflow-x-auto custom-scrollbar pb-2" : "inline-block"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
