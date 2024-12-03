import * as EnrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
 app.post("/api/enrollments/unenroll",  (req, res) => {
    const {userId, courseId} = req.body;
   const status = EnrollmentsDao.unenrollUserFromCourse(userId, courseId);
   res.send(status);
 });
 app.put("/api/enrollments/enroll",  (req, res) => {
    const {userId, courseId} = req.body;
    const status = EnrollmentsDao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
}