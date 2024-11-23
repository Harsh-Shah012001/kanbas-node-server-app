import Database from "../Database/index.js";
export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assign) => assign.course === courseId);
}

export function createAssignment(assignment) {
    const newAssign = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssign];
    return newAssign;
}

export function deleteAssignment(assignId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assign) => assign._id !== assignId);
}

export function updateAssignment(assignId, assignUpdates) {
    const { assignments } = Database;
    // console.log("aid",assignId)
    // console.log("abc",assignUpdates)
    const assign = assignments.find((assign) => assign._id === assignId);
    Object.assign(assign, assignUpdates);
    return assign;
  }
  