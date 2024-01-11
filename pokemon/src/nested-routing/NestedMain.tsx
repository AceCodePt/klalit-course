import React from "react";
import { Outlet } from "react-router-dom";

export default function NestedMain() {
  return (
    <div><>
    NavBar
    </>
    <div>
      <Outlet/>
    </div>
    </div>
  )
}
