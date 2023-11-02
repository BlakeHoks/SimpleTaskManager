import styles from './TaskContainer.module.scss'
import { TaskCard } from '../task/TaskCard.tsx'
import { useQuery } from '@tanstack/react-query'
import { TaskService } from '../../../services/TaskService.ts'
import { ITask } from '../../../types/taskTypes.ts'
export const TaskContainer = () => {
  const { data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => TaskService.getAll(),
  })
  return (
    <div className={styles.mainContent}>
      {tasks?.map((task: ITask, num: number) => (
        <TaskCard
          key={num}
          title={task.title}
          description={task.description}
          date={task.date}
        />
      ))}
    </div>
  )
}
