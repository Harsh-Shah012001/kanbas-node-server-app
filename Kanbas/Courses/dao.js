import Database from "../Database/index.js";
let { courses, enrollments } = Database;
export function findAllCourses() {
  return courses;
}
export function findCoursesForEnrolledUser(userId) {
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
    return enrolledCourses;
  }
  export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  courses = [...courses, newCourse];
  return newCourse;
}
export function deleteCourse(courseId) {
    courses = courses.filter((course) => course._id !== courseId);
    enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
  );}
  export function updateCourse(courseId, courseUpdates) {
    const course = courses.find((course) => course._id === courseId);
    Object.assign(course, courseUpdates);
    return course;
  }
  