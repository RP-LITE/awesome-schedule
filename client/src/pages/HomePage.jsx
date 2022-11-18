import React, { useState, useEffect } from "react";
import LoginForm from "@/components/LoginSignup/LoginForm";
import SignUpForm from "@/components/LoginSignup/SignUpForm";

export default function HomePage() {
  return (
    <section>
      Home Page
      <LoginForm />
      <SignUpForm />
    </section>
  );
}
