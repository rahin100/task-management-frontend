import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import signupAnimation from "../../assets/signupAnimation.json"

const SignUp = () => {
  const { createUser, googleLogin, handleUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res);
        handleUpdateProfile(name, photo).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/");
          form.reset();
        });
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:flex md:flex-row">
      <div className="flex-1">

      <div className="lg:hero min-h-screen bg-base-200 mb-[50px]">
        <div className="flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mt-[20px] mb-[20px]">
              Please Sign Up 
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning w-full md:w-auto text-white">SignUp</button>
              </div>
              <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                Already have an account yet?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <button className="btn btn-xs btn-warning text-white">Login</button>
                </Link>
              </p>
              <div>
                <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                  Continue With
                  <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-xs btn-warning text-white ml-[10px]"
                  >
                    Google
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     {/* add humans */}
     <section className="flex-1">
        <div>
         <Lottie animationData={signupAnimation}></Lottie>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
