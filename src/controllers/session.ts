import { Session, SessionModel } from "../models/sessions";
import express, { Request, Response } from "express";
import { Verify } from "../helpers/jwtHelper";
const addStudentToSession = async (req: Request, res: Response) => {
  try {
    Verify(req);
    const { student_id, session_id } = req.body;
    const attendance = await SessionAttendanceModel.create({
      student_id,
      session_id,
    });
    res.send(attendance);
  } catch (error) {
    const e = error as Error;
    if (e.message.includes("Failed to add the student attendance")) {
      res.status(500).json(e.message);
    } else {
      res.status(401).json(e.message);
    }
  }
};
