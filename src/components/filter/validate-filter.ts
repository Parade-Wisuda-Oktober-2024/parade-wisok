// Description: This file contains the function that validates the filter query parameters.
import { faculties, facultiesMajorsMap } from "~/lib/faculty-major";
import { FacultiesType } from "~/types/faculty-major";

// Validate page
export const isPageValid = (
  page: string | null,
  total: number,
  totalPerPage: number
): boolean => {
  // Check if page exists
  if (!page) return false;

  // Check if page is a number
  if (isNaN(parseInt(page))) return false;

  // Check if page is greater than 0
  if (parseInt(page) <= 0) return false;

  // Check if page is less than or equal to the last page
  if (parseInt(page) > Math.ceil(total / totalPerPage)) return false;

  return true;
};

// Validate search
export const isSearchValid = (search: string | null): boolean => {
  // Check if search exists
  if (!search) return false;

  return true;
};

// Validate faculty
export const isFacultyValid = (faculty: string | null): boolean => {
  // Check if faculty exists
  if (!faculty) return false;

  // Check if faculty is in the list
  if (!faculties.includes(faculty as any)) return false;

  return true;
};

// Validate major
export const isMajorValid = (
  faculty: string | null,
  major: string | null
): boolean => {
  // Check if faculty exists
  if (!faculty) return false;

  // Check if faculty is valid
  if (!isFacultyValid(faculty)) return false;

  // Check if major exists
  if (!major) return false;

  // Check if major is in the list
  const validMajors = facultiesMajorsMap[faculty] ?? []; // Gunakan array kosong jika undefined
  if (!validMajors.includes(major)) {
    return false; // Jika major tidak ada di validMajors
  }

  return true;
 
};
