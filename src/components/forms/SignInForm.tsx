import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { db, auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

type formFields = {
  email: string;
  password: string;
};

function SignInForm() {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    const toastId = toast.loading("Signing In...");
    let welcomeMessage: string = "Welcome back";

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      const userRef = doc(db, "#user_id", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        welcomeMessage = `Welcome back, ${userData.name}`;
      }

      toast.update(toastId, {
        render: welcomeMessage,
        type: "success",
        isLoading: false,
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: `Error: ${err}`,
        type: "error",
        isLoading: false,
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm<formFields>();

  return (
    <div className="w-full mt-20">
      <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
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
            <Link to={"/resetPassword"}>
              <p className="link link-hover text-neutral mt-1">
                Forgot Password?
              </p>
            </Link>
            {errors.password && (
              <span className="text-error">{errors.password.message}</span>
            )}
          </label>
        </div>

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

export default SignInForm;
