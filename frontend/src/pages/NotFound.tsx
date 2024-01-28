import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}
