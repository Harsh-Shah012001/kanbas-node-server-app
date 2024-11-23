import * as assignDao from "./dao.js";
export default function AssignmentRoutes(app) {
 app.delete("/api/assignments/:assignId", async (req, res) => {
   const { assignId } = req.params;
   const status = assignDao.deleteAssignment(assignId);
   res.send(status);
 });


 app.put("/api/assignments/:assignId", (req, res) => {
    const { assignId } = req.params;
    const assignUpdates = req.body;
    const status = assignDao.updateAssignment(assignId, assignUpdates);
    res.send(status);
  });



}

