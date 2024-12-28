import { z } from "zod";

const createAcademicFaculty = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Faculty must be string"
        })
    }),
})

const updateAcademicFaculty = z.object({

    body: z.object({
        name: z.string({
            invalid_type_error: "Academic Faculty must be string"
        })
    }),
})

export const AcademicFacultyValidation = {
    createAcademicFaculty,
    updateAcademicFaculty
}