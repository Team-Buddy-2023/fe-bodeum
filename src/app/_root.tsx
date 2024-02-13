import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";

export default function RootComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
