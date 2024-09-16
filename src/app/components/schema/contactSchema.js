import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[^\s]/, "First name should not start with a space")
    .min(3, "Minimum 3 characters required")
    .max(20, "Maximum 20 characters only")
    .required("First name is required")
    .matches(/^[a-zA-Z]+$/, "First name should contain only letters"),
  lastName: Yup.string()
    .matches(/^[^\s]/, "Last name should not start with a space")
    .min(1, "Minimum 1 characters required")
    .max(20, "Maximum 20 characters only")
    .required("Last name is required")
    .matches(/^[a-zA-Z]+$/, "First name should contain only letters"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Email is in invalid format")
    .email("Invalid email format")
    .required("Email is required")
    .test(
      "not-uppercase",
      "Email should not be entirely in uppercase letters",
      (value) => value !== value.toUpperCase()
    ),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .test(
      "startsWith6to9",
      "Phone number must start with a digit between 6 and 9",
      (value) => /^[6-9]/.test(value)
    )
    .required("Phone number is required"),
  message: Yup.string()
    .matches(/^[^\s]/, "First name should not start with a space")
    .min(3, "Minimum 3 characters required")
    .max(500, "Maximum 500 characters only")
    .required("Message is required"),
  check: Yup.boolean().oneOf([true], "You must accept our privacy policy"),
});
