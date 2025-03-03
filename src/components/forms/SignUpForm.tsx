import { useForm, SubmitHandler } from "react-hook-form";

type formFields = {
  name: string;
  surname: string;
  email: string;
  password: string;
  additionalInfo: string;
};

function SignUpForm() {
  const onSubmit: SubmitHandler<formFields> = () => {};

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formFields>();

  return (
    <div className="w-full mt-20">
      <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="flex flex-row justify-between">
            <label className="floating-label">
              <span>Name</span>
              <input
                type="text"
                className="input validator border-2 border-neutral focus:outline-0 w-64 h-13"
                placeholder="name"
                {...register("name", {
                  required: "Name is Required",
                  min: { value: 3, message: "At least 3 characters long" },
                })}
              />
              {errors.name && (
                <span className="text-error">{errors.name.message}</span>
              )}
            </label>

            <label className="floating-label">
              <span>Surname</span>
              <input
                type="text"
                className="input border-2 border-neutral focus:outline-0 w-64 h-13"
                placeholder="surname"
                {...register("surname", {
                  required: "Surname is Required",
                  min: { value: 3, message: "At least 3 characters long" },
                })}
              />
              {errors.surname && (
                <span className="text-error">{errors.surname.message}</span>
              )}
            </label>
          </div>
        </div>

        <div>
          <label className="floating-label">
            <span>Email</span>
            <input
              type="email"
              className="input border-2 border-neutral focus:outline-0 w-96 h-13"
              placeholder="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-error">{errors.email.message}</span>
            )}
          </label>
        </div>

        <div>
          <label className="floating-label">
            <span>Password</span>
            <input
              type="text"
              className="input border-2 border-neutral focus:outline-0 w-96 h-13"
              placeholder="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Must contain at least one uppercase letter",
                  hasLowercase: (value) =>
                    /[a-z]/.test(value) ||
                    "Must contain at least one lowercase letter",
                  hasDigit: (value) =>
                    /\d/.test(value) || "Must contain at least one digit",
                  hasSpecialChar: (value) =>
                    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) ||
                    "Must contain at least one special character",
                },
              })}
            />
            {errors.password && (
              <span className="text-error">{errors.password.message}</span>
            )}
          </label>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Additional Info</legend>
          <textarea
            className="textarea h-24 border-2 border-neutral focus:outline-0"
            {...register("additionalInfo")}
          ></textarea>
          <div className="fieldset-label">Optional</div>
        </fieldset>

        <div className="w-full flex items-center justify-center mb-16">
          <button
            disabled={isSubmitting}
            className="btn btn-neutral btn-text h-20 w-60 btn-circle"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
