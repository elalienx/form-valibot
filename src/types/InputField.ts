export default interface FormularyField {
  /** Unique identifier of this formulary field. A form must not have 2 inputs with the same id. */
  id: string;

  /** The human readable title of the input field. */
  label: string;

  /** The type of keyboard to show on mobile. Valid values: "text", "number", "email", "password". */
  type: string;

  /** A flag to decide if the field is mandatory. */

  required: boolean;

  /** An example of the data and format expected on the formulary field. */
  placeholder: string;
}
