import React from "react";

export function ExpandText({
  text,
  maxSymbolText,
  classP,
}: {
  text: string;
  maxSymbolText: number;
  classP: any;
}) {
  const [expandText, setExpandText] = React.useState(false);

  if (!expandText && text.length > maxSymbolText) {
    return (
      <p className={`${classP}`}>
        {text.substring(0, maxSymbolText)}...{" "}
        <span
          onClick={() => {
            setExpandText(true);
          }}>
          Читать дальше
        </span>
      </p>
    );
  }
  return <p className={`${classP}`}>{text}</p>;
}
