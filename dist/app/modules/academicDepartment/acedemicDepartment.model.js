"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentModel = void 0;
const mongoose_1 = require("mongoose");
const AppError_1 = require("../../errors/AppError");
const academicDepartmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicFaculty",
        required: true,
    }
}, {
    timestamps: true
});
academicDepartmentSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isDepartmentExist = yield exports.AcademicDepartmentModel.findOne({ name: this.name });
        if (isDepartmentExist) {
            throw new AppError_1.AppError(404, "This Academic-department is already exist");
        }
        else {
            next();
        }
    });
});
// update 
academicDepartmentSchema.pre("findOneAndUpdate", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = this.getQuery();
        const isDepartmentExist = yield exports.AcademicDepartmentModel.findOne(query);
        if (!isDepartmentExist) {
            throw new AppError_1.AppError(httpStatus.NOT_FOUND, "This Academic-department does not exist");
        }
        else {
            next();
        }
    });
});
exports.AcademicDepartmentModel = (0, mongoose_1.model)("AcademicDepartment", academicDepartmentSchema);