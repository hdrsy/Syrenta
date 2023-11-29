import { ValidationArguments, registerDecorator, ValidationOptions } from "class-validator";
import isJSONValidator from "validator/lib/isJSON";

export function IsJSONValue(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsJSONValue",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Check if value is undefined or null
          if (value === undefined || value === null) {
            return false;
          }

          // Check if value is a string and a valid JSON
          if (typeof value === "string") {
            return isJSONValidator(value);
          }

          // Convert value to JSON string and validate
          try {
            return isJSONValidator(JSON.stringify(value));
          } catch (e) {
            return false;
          }
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} must be a valid json`;
        },
      },
    });
  };
}
