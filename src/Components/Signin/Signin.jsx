import { useForm } from "react-hook-form";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box className="container mt-4">
      <Box>
        <Typography className="text-center" variant="h5">
          Sign in to FreshCart
        </Typography>
        <Typography className="text-center" variant="body1">
          Welcome back to FreshCart! Enter your email to get started.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            size="small"
            fullWidth
            type="email"
            placeholder="E-mail"
            {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>

        <Box>
          <TextField
            type={showPassword ? "text" : "password"}
            size="small"
            className="my-4"
            fullWidth
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </InputAdornment>
              ),
            }}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>

        <Box>
          <Button type="submit" fullWidth variant="contained">
            Sign in
          </Button>
        </Box>
      </form>

      <Typography className="mt-4 text-center">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </Box>
  );
};

export default Signin;
