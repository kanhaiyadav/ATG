import { useState } from "react";
import "./App.css";
import Nav from "./Components/nav";
import Hero from "./Components/Hero";
import Main from "./Components/Main";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [signup, setSignup] = useState(false);
    return (
        <div style={{
            height: '100vh',
            overflowY: 'auto',
            position: 'relative'
        }}>
            <div className="">
                <Nav
                    authenticated={authenticated}
                    setOpenModal={setOpenModal}
                />
                <Hero
                    authenticated={authenticated}
                    setOpenModal={setOpenModal}
                />
                <Main
                    authenticated={authenticated}
                    setOpenModal={setOpenModal}
                />
                <div
                    className="d-block d-sm-none position-fixed"
                    style={{ bottom: "20px", right: "20px" }}
                    onClick={() => {
                        if (!authenticated) setOpenModal(true);
                    }}
                >
                    <img
                        src="/circle-pencil.svg"
                        alt=""
                        width={54}
                        height={54}
                    />
                </div>

                {openModal && (
                    <div
                        className="position-fixed w-100 h-100 bg-black bg-opacity-50 top-0 start-0 d-flex justify-content-center align-items-center"
                        style={{ zIndex: 1000 }}
                        onClick={() => setOpenModal(false)}
                    >
                        <div
                            className="signin bg-white w-100 mx-2 rounded-3 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: "736px" }}
                        >
                            <div
                                className="d-sm-block d-none bg-success-subtle px-5 py-2 text-success fw-semibold"
                                style={{ fontSize: "14px" }}
                            >
                                Let&apos;s learn, share & inspire each other with our
                                passion for computer engineering. Sign up now 🤘🏼
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col p-4">
                                        <h1 className="d-sm-block d-none fs-2 fw-bold mb-4">
                                            Sign In
                                        </h1>

                                        <div className="d-sm-none d-flex justify-content-between align-items-center mb-4">
                                            <h1 className=" fs-3 fw-bold">
                                                {signup
                                                    ? "Create Account"
                                                    : "Welcom back!"}
                                            </h1>
                                            <img
                                                src="/cancel.svg"
                                                alt="close"
                                                width={24}
                                                onClick={() =>
                                                    setOpenModal(false)
                                                }
                                            />
                                        </div>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                setAuthenticated(true);
                                                setOpenModal(false);
                                            }}
                                        >
                                            <div>
                                                {signup && (
                                                    <div className=" input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="First Name"
                                                        />
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Last Name"
                                                        />
                                                    </div>
                                                )}
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                />
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                />
                                                {signup && (
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Confirm Password"
                                                    />
                                                )}
                                            </div>
                                            <div className="w-full mt-3 d-flex justify-content-between align-items-center">
                                                <button className="btn btn-primary py-2 px-5 mt-3 rounded-pill sign">
                                                    <span className="fw-medium">
                                                        Sign In
                                                    </span>
                                                </button>

                                                <a
                                                    href=""
                                                    className="text-secondary mt-3 d-sm-none d-block fw-semibold text-decoration-none"
                                                    style={{
                                                        fontSize: "12px",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            textDecoration:
                                                                "underline",
                                                        }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSignup(!signup);
                                                        }}
                                                    >
                                                        {signup
                                                            ? "or, Sign In"
                                                            : "or, Create account"}
                                                    </span>
                                                </a>
                                            </div>
                                        </form>
                                        <div>
                                            <div
                                                className="d-flex justify-content-center p-2 mt-3 border border-1 border-secondary border-opacity-25"
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: "#f7f8fa",
                                                }}
                                            >
                                                <span className="social fw-semibold">
                                                    <img
                                                        src="/facebook.png"
                                                        alt="facebook"
                                                        width={16}
                                                        className="mb-1 me-1"
                                                    />{" "}
                                                    Sign in with Facebook
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="d-flex justify-content-center p-2 mt-2 border border-1 border-secondary border-opacity-25"
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: "#fefefe",
                                                }}
                                            >
                                                <span className="social fw-semibold">
                                                    <img
                                                        src="/google.svg"
                                                        alt="facebook"
                                                        width={16}
                                                        className="mb-1 me-1"
                                                    />{" "}
                                                    Sign in with Google
                                                </span>
                                            </div>
                                        </div>
                                        {signup ? (
                                            ""
                                        ) : (
                                            <p className="w-100 text-center my-3 fw-semibold">
                                                Forgot Password?
                                            </p>
                                        )}
                                        {signup && (
                                            <p className="w-100 text-center my-3 px-5 fw-semibold text-secondary">
                                                By signing up, you agree to our
                                                Terms & conditions, Privacy
                                                policy
                                            </p>
                                        )}
                                    </div>
                                    <div className="col d-sm-flex d-none flex-column justify-content-center align-items-center">
                                        <p
                                            style={{
                                                fontSize: "13px",
                                                textAlign: "center",
                                            }}
                                            className="text-muted"
                                            onClick={() => setSignup(!signup)}
                                        >
                                            Don&apos;t have an account
                                            yet?&nbsp;
                                            <span className="fw-semibold text-primary">
                                                Create new for free!
                                            </span>
                                        </p>
                                        <img
                                            src="/signin-img.svg"
                                            alt="signin image"
                                            className="w-100"
                                        />
                                        {signup && (
                                            <p className="text-center text-secondary">
                                                By signing up, you agree to our
                                                Terms & conditions, Privacy
                                                policy
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
