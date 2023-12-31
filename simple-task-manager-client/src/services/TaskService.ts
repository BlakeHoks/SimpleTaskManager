import axios from 'axios'
import { baseUrl } from './vars.ts'
import { ITask } from '../types/taskTypes.ts'

export const TaskService = {
  async getAll() {
    //return (await axios.get(`${baseUrl}/`)).data
  },
  async create(data: ITask) {
    return await axios.post(`${baseUrl}/task`, data)
  },
  async update(id: number, data: ITask) {
    return await axios.patch(`${baseUrl}/task/${id}`, data)
  },
  async delete(id: number) {
    return await axios.delete(`${baseUrl}/task/${id}`)
  },
}
