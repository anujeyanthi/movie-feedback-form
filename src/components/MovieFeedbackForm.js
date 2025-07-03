import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MovieFeedbackForm = () => {
  const initialValues = {
    Name: "",
    MovieName: "",
    ratings: "",
    comments: "",
  };

  const validationSchema = Yup.object({
    Name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Full name is required"),

    MovieName: Yup.string().required("MovieName is required"),

    ratings: Yup.number()
      .min(1, "Minimum rating is 1")
      .max(5, "Maximum rating is 5")
      .required("Rating is required"),

    comments: Yup.string().max(50, "comments should be under 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      name: values.Name,
      movie: values.MovieName,
      rating: values.ratings,
      comments: values.comments,
    };

    localStorage.setItem("reviews", JSON.stringify([...existingReviews, newReview]));

    alert("Form submitted successfully");
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>MOVIE FEEDBACK FORM</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Name:</label>
            <Field type="text" name="Name" />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>

          <div>
            <label>MovieName:</label>
            <Field type="text" name="MovieName" />
            <ErrorMessage name="MovieName" component="div" className="error" />
          </div>

          <div>
            <label>ratings (1-5):</label>
            <Field type="number" name="ratings" min="1" max="5" />
            <ErrorMessage name="ratings" component="div" className="error" />
          </div>

          <div>
            <label>comments:</label>
            <Field as="textarea" name="comments" />
            <ErrorMessage name="comments" component="div" className="error" />
          </div>

          <button type="submit">Submit Feedback</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieFeedbackForm;
