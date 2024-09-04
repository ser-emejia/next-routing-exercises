import React from "react";
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main>
      <p>Choose your favorite color</p>
      <ul>
        <li>
          <Link href={"/exercises/01-screensaver/red"}>Red</Link>
        </li>
        <li>
          <Link href={"/exercises/01-screensaver/blue"}>Blue</Link>
        </li>
        <li>
          <Link href={"/exercises/01-screensaver/green"}>Green</Link>
        </li>
        <li>
          <Link href={"/exercises/01-screensaver/salmon"}>Salmon</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
