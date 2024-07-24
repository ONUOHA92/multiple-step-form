import { DataType, ErrorType } from "./type-enums";

export function validation(step: number, data: DataType): ErrorType[] {
  const inputField = [data.name, data.email, data.phone];
  let flag: ErrorType[] = [];

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const phoneRegex = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?\d{6,14}$/;
  switch (step) {
    case 0: {
      inputField.forEach((item, index) => {
        if (item.length === 0) {
          flag.push({
            index: index,
            errorMsg: "This field is required",
          });
        } else {
          if (index === 0 && item.length <= 5) {
            flag.push({
              index: index,
              errorMsg: "Name must be longer than 5 characters",
            });
          }
          if (index === 1 && !emailRegex.test(item)) {
            flag.push({
              index: index,
              errorMsg: "Please enter a valid email address",
            });
          }
          if (index === 2 && !phoneRegex.test(item)) {
            flag.push({
              index: index,
              errorMsg: "Please enter a valid phone number",
            });
          }
        }
      });
      break;
    }
    case 1: {
      // Additional validation for step 1
      break;
    }
    case 2: {
      // Additional validation for step 2
      break;
    }
    case 3: {
      // Additional validation for step 3
      break;
    }
    default:
      break;
  }

  return flag;
}
