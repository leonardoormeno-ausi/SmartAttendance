import { api } from './api'
import type { Student } from '../types/Student'

export const studentService = {
  async getStudents(): Promise<Student[]> {
    const response = await api.get<Student[]>('/api/students')

    return response.data
  },

  async createStudent(student: Omit<Student, 'id'>): Promise<Student> {
    const response = await api.post<Student>(
      '/api/students',
      student
    )

    return response.data
  },

  async deleteStudent(id: number): Promise<void> {
    await api.delete(`/api/students/${id}`)
  },
}