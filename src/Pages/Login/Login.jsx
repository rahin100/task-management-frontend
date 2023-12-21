import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Lottie from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import loginAnimation from "../../assets/loginAnimation.json"

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  
    try {
        const user = await signIn(email, password);
        console.log(user);
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(location?.state ? location.state : "/");
  
      } catch (error) {
        console.error(error.message);
      }
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
    <div className="lg:flex">

      <div className="min-h-screen bg-base-200 p-4 md:p-0 flex-1">
        <div className=" flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-[20px] mb-[20px]">
            Please Login Now

          </h1>
          <div className="w-full md:max-w-sm">
            <div className="card shadow-lg bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                <div className="form-control mt-4 md:mt-6">
                  <button className="btn btn-warning w-full md:w-auto text-white">
                    Login
                  </button>
                </div>
                <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400 text-center md:text-left mt-4">
                  Do not have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <button className="btn btn-xs btn-warning text-white">Sign Up</button>
                  </Link>
                </p>
                <div className="text-center md:text-left mt-4">
                  <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
                    Continue With
                    <button
                      onClick={() => handleSocialLogin(googleLogin)}
                      className="btn btn-xs btn-warning text-white ml-2 md:ml-4"
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
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
      </section>
    </div>
  );
};

export default Login;
