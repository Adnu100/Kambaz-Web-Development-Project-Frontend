"use client";

import { redirect } from "next/navigation";

export default function Kambaz() {
  const goToApplication = () => redirect("/Account/Signin");

  return (
    <div>
      <hr />
      <h1 className="text-center my-5">Kambaz Quizzes Project</h1>
      <hr />

      <div className="my-5 text-center">
        <h2>Team members:</h2>
        <p className="my-3">
          Adnesh Dhamangaonkar - Web Development CS5610.19730.202610
        </p>
        <p className="my-3">
          Piyush Daga - Web Development CS5610.19730.202610
        </p>
        <p className="my-3">
          Roshitha Tiruveedhula - Web Development CS5610.19730.202610
        </p>
      </div>
      <hr />

      <div className="my-5 text-center">
        <button className="btn btn-primary" onClick={goToApplication}>
          Go to Kambaz
        </button>
      </div>
      <hr />
    </div>
  );
}

