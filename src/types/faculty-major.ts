import { faculties, majors } from "~/lib/faculty-major";

export type FacultiesType = (typeof faculties)[number];

export type MajorsType = (typeof majors)[number];
