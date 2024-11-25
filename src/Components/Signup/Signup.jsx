import { useForm } from "react-hook-form";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const Signup = () => {
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
          Get Started Shopping
        </Typography>
        <Typography className="text-center" variant="body1">
          Welcome to FreshCart! Enter your details to get started.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            size="small"
            fullWidth
            placeholder="First Name"
            {...register("firstName", { required: "First Name is required" })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Box>

        <Box>
          <TextField
            size="small"
            className="my-4"
            fullWidth
            placeholder="Last Name"
            {...register("lastName", { required: "Last Name is required" })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Box>

        <Box>
          <TextField
            size="small"
            fullWidth
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
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
