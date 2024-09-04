"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ToastContext } from "../../../../components/ToastProvider/ToastProvider";

function ContactPage() {
  const router = useRouter();

  const { createToast } = React.useContext(ToastContext);

  return (
    <main>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.back();
          createToast("Your message was received", "success");
        }}
      >
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
