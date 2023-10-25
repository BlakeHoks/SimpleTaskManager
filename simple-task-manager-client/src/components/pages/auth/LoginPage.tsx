import { Button, Chip, Paper, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import { useForm } from 'react-hook-form'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '../../../services/AuthService.ts'
import { loginData } from '../../../types/ServicesTypes.ts'

export const LoginPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginData>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate } = useMutation({
    mutationFn: (data: loginData) => AuthService.login(data),
  })

  const onSubmit = (data: loginData) => {
    mutate(data)
  }

  return (
    <div className={styles.container}>
      <Paper elevation={12} sx={{ padding: '10px' }}>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Chip
            icon={<LockOpenIcon />}
            label="Login"
            variant="outlined"
            color="primary"
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            margin={'normal'}
            label="email"
            type={'email'}
            {...register('email', {
              required: { value: true, message: 'Введите Email' },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            margin={'normal'}
            label="Пароль"
            type={'password'}
            {...register('password', {
              required: { value: true, message: 'Введите пароль' },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type={'submit'}
            variant="outlined"
            color={'primary'}
            sx={{ mt: 1, mb: 1 }}
          >
            Войти
          </Button>
          <p>
            Если у вас еще нет аккаута, вы можете{' '}
            <Link to="/register">создать его</Link>.
          </p>
        </form>
      </Paper>
    </div>
  )
}
