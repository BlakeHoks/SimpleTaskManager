import { Card } from '@mui/material'
import { ITask } from '../../../types/taskTypes.ts'

export const TaskCard = ({ title, description, date }: ITask) => {
  return (
    <Card>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
    </Card>
  )
}
