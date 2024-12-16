/* eslint-disable react/prop-types */
import { mainNav, mainNav2 } from "../constants/home";
import { useState } from "react";
import Card from "./Card";
import { posts } from "../constants/home";

const Main = ({ authenticated, setOpenModal }) => {
    const [joinGroup, setJoinGroup] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    return (
        <main className="container">
            <nav
                className="row row-cols-2 pt-5 w-100 position-relative"
                style={{ top: "1px" }}
            >
                <div className="d-sm-block d-none col h-100 flex-grow-1 mt-3">
                    {mainNav.map((item, index) => (
                        <span
                            key={index}
                            className="me-4 py-3"
                            onClick={() => setActiveNav(item.id)}
                            style={{
                                cursor: "pointer",
                                color: activeNav === item.id ? "black" : "gray",
                                borderBottom:
                                    activeNav === item.id
                                        ? "2px solid black"
                                        : "none",
                            }}
                        >
                            {item.title}
                        </span>
                    ))}
                </div>

                <div className=" w-100 d-sm-none d-flex flex-row justify-content-between align-items-center">
                    <h6>Posts(368)</h6>

                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {`Filter: ${mainNav2[activeNav].title}`}
                        </button>
                        <ul className="dropdown-menu">
                            {mainNav2.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveNav(item.id)}
                                >
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="col-auto d-lg-flex d-none align-items-center gap-3">
                    <button className="btn btn-secondary">Write a Post</button>
                    <button
                        className="btn btn-primary d-flex gap-1"
                        onClick={() => {
                            if (authenticated) {
                                setJoinGroup(!joinGroup);
                            } else {
                                setOpenModal(true);
                            }
                        }}
                    >
                        {joinGroup ? (
                            <img src="/leave.svg" alt="" width={24} />
                        ) : (
                            <img src="/joinn-group.svg" alt="" width={24} />
                        )}
                        {joinGroup ? "Leave Group" : "Join Group"}
                    </button>
                </div>
            </nav>
            <hr style={{ border: "1px solid gray" }} />
            <div className="row">
                <div className="col-8 vstack gap-4 py-3">
                    {posts.map((post, index) => (
                        <Card key={index} post={post} />
                    ))}
                </div>
                <div className="d-lg-block d-none col-4 py-5 ps-xl-5 ps-lg-3 p-2 pe-0 vstack gap-4">
                    <div className="d-flex flex-row align-items-center gap-3 border-1 border-bottom border-secondary">
                        <img src="/location.svg" alt="location" width={18} />
                        <input
                            type="text"
                            value={"Noida, India"}
                            className=" border-0 bg-transparent flex-grow-1 flex-shrink-1 w-75"
                            style={{ outline: "none" }}
                        />
                        <img src="/pencil.svg" alt="pencil" width={18} />
                    </div>
                    <p className=" text-secondary w-100">
                        <img src="/info.svg" alt="info" width={18} />
                        &nbsp;Your location will help us serve better and extend
                        a personalised experience.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;
