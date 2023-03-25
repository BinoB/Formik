import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  movieName: '',
  genres: [],
  media: [],
  reviews: [],
  cast: []
};

const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'];

const mediaTypes = ['Video', 'Image'];

const roles = ['Actor', 'Actress', 'Director', 'Writer', 'Producer'];

const skills = ['Acting', 'Directing', 'Writing', 'Producing', 'Cinematography'];

const IMBD = () => (
  <div className="container mt-5">
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name:</label>
            <Field type="text" name="movieName" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="genres">Genres:</label>
            <Field as="select" name="genres" className="form-control" multiple>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </Field>
          </div>
          <div className="form-group">
            <label htmlFor="media">Media:</label>
            {mediaTypes.map(mediaType => (
              <div key={mediaType}>
                <label className="mr-2">{mediaType}:</label>
                <Field type="text" name={`media.${mediaType.toLowerCase()}`} className="form-control mb-2" />
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="reviews">Reviews:</label>
            <Field type="text" name="reviews" className="form-control" />
          </div><br/>
          <div className="form-group">
            <label htmlFor="cast">Cast:</label>
            {roles.map(role => (
              <div key={role} className="mb-2">
                <label className="mr-2">{role}:</label>
                <Field type="text" name={`cast.${role.toLowerCase()}`} className="form-control" />
              </div>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <Field as="select" name="skills" className="form-control" multiple>
              {skills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </Field>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default IMBD;
