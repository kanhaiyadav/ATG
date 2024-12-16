const Card = ({ post }) => {
    return (
        <div className="post card overflow-hidden">
            {post.imgPath && (
                <img
                    src={`${post.imgPath}`}
                    alt="post img"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        objectPosition: "center",
                    }}
                />
            )}
            <div className="card-body">
                <p className="fw-semibold mb-2">{post.type}</p>
                <div className="d-flex flex-row justify-content-between gap-xl-5 gap-lg-3 gap-md-2 gap-0">
                    <h4>{post.title}</h4>
                    <div className="dropdown">
                        <img
                            src="/menu.svg"
                            alt="menu"
                            className="dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        />
                        <ul className="dropdown-menu">
                            <li>
                                <button className="dropdown-item" type="button">
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Report
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Option 3
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>{post.description}</p>
                {post.type === "🗓️ Meetup" && (
                    <div className="vstack">
                        <div className="d-flex flex-row gap-lg-5 gap-3">
                            <div className="d-flex ">
                                <img
                                    src="/date.svg"
                                    alt="date"
                                    className="icon"
                                />
                                <p className="ms-2">{post.date}</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                                <img
                                    src="/location.svg"
                                    alt="date"
                                    className="mt-lg-1 icon"
                                />
                                <p>{post.location}</p>
                            </div>
                        </div>
                        <button className="btn btn-outline-secondary mt-2">
                            <span style={{ color: "red", fontWeight: 600 }}>
                                {post.buttonTitle}
                            </span>
                        </button>
                    </div>
                )}
                {post.type === "💼️ Job" && (
                    <div className="vstack">
                        <div className="d-flex flex-row align-items-center gap-lg-5 gap-2">
                            <div className="d-flex">
                                <img
                                    src="/office-bag.svg"
                                    alt="office bag"
                                    className="icon"
                                />
                                <p className="ms-2">{post.designation}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img
                                    src="/location.svg"
                                    alt="location"
                                    className="mt-lg-1 icon"
                                />
                                <p>{post.location}</p>
                            </div>
                        </div>
                        <button className="btn btn-outline-secondary mt-2">
                            <span style={{ color: "#02b875", fontWeight: 600 }}>
                                {post.buttonTitle}
                            </span>
                        </button>
                    </div>
                )}
            </div>
            <div className=" d-flex flex-row justify-content-between align-items-center p-2">
                <div className="d-flex flex-row gap-3 align-items-center fw-bold">
                    <img
                        src={`${post.authorAvatar}`}
                        alt="post author"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="rounded-circle author-avatar"
                    />
                    <div className="vstack">
                        <h4 className="m-0 mt-sm-2">{post.author}</h4>
                        <p className="d-sm-none d-block">{post.view} views</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <div className="align-items-center gap-1 d-sm-flex d-none">
                        <img
                            src="/eye.svg"
                            alt="views"
                            className="icon"
                        />
                        <p>{post.view} views</p>
                    </div>
                    <button className="btn btn-sm btn-light d-flex align-items-center gap-1">
                        <img
                            src="/share.svg"
                            alt="share"
                            className="icon"
                        />
                        <p className="d-sm-none block">Share</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
