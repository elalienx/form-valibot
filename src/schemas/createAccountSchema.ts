// Node modules
import * as v from "valibot";

const createAccountSchema = v.object({
  name: v.pipe(v.string()),
  age: v.pipe(v.string(), v.transform(Number), v.minValue(18)), // see note on README.md of why starts with string and not number
  email: v.pipe(v.string(), v.email()),
});

export default createAccountSchema;
