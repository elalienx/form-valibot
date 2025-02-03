// Node modules
import { useState } from "react";
import * as v from "valibot";

// Project files
import data from "./data/createAccountData.json";
import InputText from "./component/InputText";
import schema from "./schemas/createAccountSchema";
import "./styles/style.css";

export default function App() {
  // Local state
  const [result, setResult] = useState(`Submit the form to see the result.`);

  // Methods
  function onSubmit(event: React.FormEvent): void {
    const formData = new FormData(event.target as HTMLFormElement);
    const userInput = Object.fromEntries(formData.entries());
    const result = v.safeParse(schema, userInput);

    event.preventDefault();
    setResult(JSON.stringify(result));
  }

  return (
    <div className="app">
      <h1>Form Validation with Valibot</h1>
      <h2>Create Account</h2>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <InputText item={data.name} />
        <InputText item={data.age} />
        <InputText item={data.email} />
        <button className="button">Submit</button>
      </form>
      <h2>Results</h2>
      <code>{result}</code>
    </div>
  );
}
