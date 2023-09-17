import { Formik, Field, Form, ErrorMessage } from "formik";
import { BasicSchema } from "../assets/Schema/BasicSchema";
const today = new Date().toISOString().split("T")[0];
const Booking = () => {
  return (
    <main className=" bg-yellow-300">
      <div className=" h-screen flex flex-col items-center justify-center">
        <h1 className="text-center my-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-violet-900">
          Bookings
        </h1>
        <Formik
          initialValues={{
            name: "",
            date: "",
            time: "",
            numberOfGuests: "",
            occasion: "",
          }}
          validationSchema={BasicSchema}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          <Form className="bg-violet-100 shadow-md rounded-3xl px-48 py-10 mb-4 flex flex-col items-center text-violet-900 relative">
            <div className="mb-4">
              <label htmlFor="name" className="block  text-lg font-bold mb-2 ">
                Name :
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Input name here"
                className=" w-96 pl-3 rounded"
              />
              <div className="text-red-500 text-xs italic absolute pl-3">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block  text-lg font-bold mb-2">
                Date :
              </label>
              <Field
                type="date"
                name="date"
                id="date"
                min={today}
                placeholder="Input date here"
                className="w-96 pl-3 rounded"
              />
              <div className="text-red-500 text-xs italic absolute pl-3">
                <ErrorMessage name="date" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block  text-lg font-bold mb-2">
                Time :
              </label>
              <Field
                as="select"
                name="time"
                id="time"
                placeholder="Input time here"
                className=" w-96 pl-3 rounded"
              >
                <option>Select a time-slot</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </Field>
              <div className="text-red-500 text-xs italic absolute pl-3">
                <ErrorMessage name="time" />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="numberOfGuests"
                className="block  text-lg font-bold mb-2"
              >
                Number of Guest :
              </label>
              <Field
                type="number"
                name="numberOfGuests"
                id="numberOfGuests"
                placeholder="Input number of guests"
                className=" w-96 pl-3 rounded"
              />
              <div className="text-red-500 text-xs italic absolute pl-3">
                <ErrorMessage name="numberOfGuests" />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="occasion"
                className="block  text-lg font-bold mb-2"
              >
                Occasion :
              </label>
              <Field
                name="occasion"
                as="select"
                id="occasion"
                className=" w-96 pl-3 rounded rounded"
              >
                <option>Please choose an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </Field>
              <div className="text-red-500 text-xs italic absolute pl-3">
                <ErrorMessage name="occasion" />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center mr-2 mb-2 mt-10"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default Booking;
