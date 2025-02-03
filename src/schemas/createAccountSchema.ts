// Node modules
import * as v from "valibot";

const formSchema = v.object({
  name: v.pipe(v.string()),
  age: v.pipe(v.string(), v.transform(Number), v.minValue(18)), // see note on README.md
  email: v.pipe(v.string(), v.email()),
});

export default formSchema;
