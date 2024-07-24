"use client";
import { MyProvider } from "@/app/provider";
import React from "react";
import Container from "./Container";
function Client({ children }: { children: React.ReactNode }) {
  return (
    <MyProvider>
      <Container>{children}</Container>
    </MyProvider>
  );
}

export default Client;
