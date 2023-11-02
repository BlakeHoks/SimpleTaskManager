import { Card } from '@mui/material'
import { ITask } from '../../../types/taskTypes.ts'

export const TaskCard = ({ title, content, date }: ITask) => {
  return (
    <Card>
      <p>{title}</p>
      <p>{content}</p>
      <p>{date}</p>
    </Card>
  )
}
