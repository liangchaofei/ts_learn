/*
import { department } from '../constants/options';
 * @Author: your name
 * @Date: 2019-10-23 20:50:49
 * @LastEditTime: 2019-10-30 16:42:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-redux/src/interface/employee.ts
 */
export interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    departmentId: number;
    hiredate: string;
    level: string;
    levelId: number;
}

export interface EmployeeRequest {
    name?: string;
    departmentId?: number;
}

export type EmployeeResponse = EmployeeInfo[] | undefined

export interface CreateRequest {
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}

export interface UpdateRequest {
    id: number;
    name: string;
    departmentId: number;
    hiredate: string;
    levelId: number;
}

export interface DeleteRequest {
    id: number;
}