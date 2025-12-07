import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
 // const { courseId } = useParams();
 const params = useParams();
  return (
    <div>
      <h1>Course Details</h1>
      <p>Details for course ID: {params.courseId}</p>
    </div>
  );
};

export default CourseDetails;