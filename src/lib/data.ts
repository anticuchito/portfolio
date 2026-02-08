import dataPortafolio from "../data/cv.json";
import type { Resume } from "../types";

export const data: Resume = dataPortafolio;

export const { basics, work, education, skills, projects } = data;
