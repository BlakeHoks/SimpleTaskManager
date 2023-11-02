import { Button, Chip, Paper, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './auth.module.scss'
import { useForm } from 'react-hook-form'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { useMutation } from '@tanstack/react-query'
import { AuthService } from '../../../services/AuthService.ts'
import { registerData } from '../../../types/authTypes.ts'
import LoginIcon from '@mui/icons-material/Login'

export const RegistrationPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const { mutate } = useMutation({
    mutationFn: (data: registerData) => AuthService.register(data),
  })

  const onSubmit = (data: registerData) => {
    mutate(data)
  }

  return (
    <div className={styles.container}>
      <Paper elevation={12} sx={{ padding: '10px' }}>
        <form autoComplete={'off'} onSubmit={handleSubmit(onSubmit)}>
          <Chip
            icon={<LockOpenIcon />}
            label="Registration"
            variant="outlined"
            color="primary"
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            margin={'normal'}
            label="Имя"
            type={'text'}
            {...register('name', {
              required: { value: true, message: 'Введите ваше имя' },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
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
              minLength: {
                value: 5,
                message: 'Минимальная длина пароля 5 символов',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type={'submit'}
            variant="outlined"
            color={'primary'}
            startIcon={<LoginIcon />}
            sx={{ mt: 1, mb: 1 }}
          >
            Создать
          </Button>
          <p>
            Если у вас уже есть аккаут, вы можете{' '}
            <Link to="/login">войти в него</Link>.
          </p>
        </form>
      </Paper>
    </div>
  )
}
