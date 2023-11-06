//import React from 'react'
import styles from './HomePage.module.scss'
import { ProfileBar } from '../../layout/profileBar/ProfileBar.tsx'
import { TaskContainer } from '../../layout/taskContainer/TaskContainer.tsx'

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileBar />
      <TaskContainer />
    </div>
  )
}
