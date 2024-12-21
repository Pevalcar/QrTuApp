import { useState } from "preact/hooks";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    }
    if (data.error) {
      setError(data.error);
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input type="text" id="email" name="email" required />
      </label>
      <label>
        Email
        <input type="password" id="password" name="password" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
