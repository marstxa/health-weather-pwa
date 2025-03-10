import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";

type FieldValues = {
  email: string;
};

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Submitting form...");
    try {
      await sendPasswordResetEmail(auth, data.email);

      toast.update(toastId, {
        render: "Sent reset link to email",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/signIn");
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: `Error: ${err}`,
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-1/4 h-120 bg-base-300 flex flex-col items-center justify-evenly px-[2%] rounded-box border border-accent">
        <figure className="w-36 h-36 bg-neutral aspect-square rounded-full p-3">
          <img
            className="w-full h-full object-fit"
            src="/logos/logo-transparent-1.png"
            alt="healthadvice"
          />
        </figure>

        <form
          className="w-full h-auto flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="floating-label w-full">
            <span className="h3-font bg-transparent">Email</span>
            <input
              type="email"
              placeholder="example@email.com"
              className="input w-full h-20 text-lg border-1  focus:outline-0"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary font-[Rubik] font-semibold text-lg w-36 h-16 text-white"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Reset"
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default ForgotPassword;
