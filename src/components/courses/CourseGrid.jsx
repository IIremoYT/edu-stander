import React from 'react';
import CourseCard from './CourseCard';
import Reveal from '../Reveal';

export default function CourseGrid({ courses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <Reveal key={course.id} delay={idx * 0.08}>
          <CourseCard course={course} />
        </Reveal>
      ))}
    </div>
  );
}
