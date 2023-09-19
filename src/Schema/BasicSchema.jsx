import * as Yup from "yup";

const today = new Date().toISOString().split("T")[0];

export const BasicSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  date: Yup.date()
    .required("Date is required")
    .min(today, "Date cannot be in the past"),

  time: Yup.string()
    .required("Time is required")
    .oneOf(
      ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      "Time is required"
    ),

  numberOfGuests: Yup.number()
    .required("Number of guests is required")
    .min(1, "At least one guest is required")
    .integer("Number of guests must be an integer")
    .positive("Must be positive you dumbass")
    .required("Number of guest is required"),

  occasion: Yup.string()
    .required("Occasion is required")
    .oneOf(["birthday", "anniversary"], "Invalid occasion"),
});
