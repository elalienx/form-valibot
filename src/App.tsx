// Node modules
import * as v from "valibot";

// Project files
import "./styles/style.css";

export default function App() {
  // Properties
  const Schema = v.object({
    name: v.pipe(v.string()),
    age: v.pipe(v.string(), v.transform(Number), v.minValue(18)), // see footnote
    email: v.pipe(v.string(), v.email()),
  });
  /**
   * Footnote:
   * Notice how on the field age we start from string because <input type="number"/> is actually capturing strings from the keyboard.
   * Therefore we must transform it to number, then run the numeric validations.
   */

  // Methods
  function onSubmit(event: React.FormEvent): void {
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name");
    const age = formData.get("age");
    const email = formData.get("email");
    const result = v.safeParse(Schema, { name, age, email });

    event.preventDefault();
    console.log(result);
  }

  return (
    <div className="app">
      <h1>Form validation with Valibot</h1>
      <p>
        Spike to test{" "}
        <a href="https://valibot.dev" target="_blank">
          Valibot
        </a>{" "}
        as a Schema parse to validate formularies. Open the console to see the
        submission results.
      </p>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        {/* Name */}
        <label className="input input-text">
          <span className="label">Name:</span>
          <input type="text" name="name" required placeholder="Jhon Doe" />
        </label>
        {/* Age */}
        <label className="input input-text">
          <span className="label">Age:</span>
          <input type="number" name="age" required placeholder="42" />
        </label>
        {/* Email */}
        <label className="input input-text">
          <span className="label">Email:</span>
          <input type="email" name="email" required placeholder="jhon@doe.us" />
        </label>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
