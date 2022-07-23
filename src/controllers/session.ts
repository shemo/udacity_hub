import { NextFunction, Request, Response } from "express";
import SessionAttendanceModel from "../models/StudentSession";

const studentAttendanceModel = new SessionAttendanceModel();
export const addStudentToSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentAttendance = await SessionAttendanceModel.create(req.body);
    res.json({
      status: "success",
      data: { ...studentAttendance },
      message: "Student Attendance Logged Successfully",
    });
  } catch (error) {
    next(error);
  }
};
