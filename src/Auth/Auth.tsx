import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { AppRootStateType } from "../Redux/store"
//import { loginTC } from "../Redux/auth-reducer"

export const Login = () => {

  const dispatch = useDispatch()

  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)

  const formik = useFormik({
    validate: (values) => {
      if (!values.email) {
        return {
          email: 'Email is required'
        }
      }
      if (!values.password) {
        return {
          password: 'Password is required'
        }
      }
    },
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: values => {
      //dispatch(loginTC(values))
    },
  })

  if(isLoggedIn) {
    return <Redirect to={"/"} />
  }

  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel></FormLabel>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
              <FormControlLabel
                label={'Remember me'}
                control={<Checkbox
                  {...formik.getFieldProps("rememberMe")}
                  checked={formik.values.rememberMe}
                />}
              />
              <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}

export default Login