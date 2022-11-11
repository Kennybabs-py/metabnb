import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

export default function RouteLinks() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.id}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
}
