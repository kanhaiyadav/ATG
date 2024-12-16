const Nav = ({authenticated, setOpenModal}) => {
    return (
        <nav
            className="d-sm-flex d-none flex-row align-items-center justify-content-between w-100 py-3"
            style={{
                // height: "72px",
                padding: "0px 72px",
            }}
        >
            <a href="#">
                <img src="/brand.svg" alt="brand-icon" />
            </a>
            <form
                action=""
                className={`d-flex flex-row align-items-center
                 gap-2 rounded-pill px-3 py-1 d-md-flex d-none`}
                style={{
                    background: "#f2f2f2",
                    width: "360px",
                    height: "42px",
                }}
            >
                <img src="/search.svg" alt="" width={22} height={22} />
                <input
                    type="text"
                    style={{ outline: "none" }}
                    className=" border-0 bg-transparent flex-grow-1"
                    placeholder="Search for your favorite groups in ATG"
                />
            </form>
            <p className=" d-lg-block d-none"
                onClick={() => setOpenModal(true)}
                style={{cursor: "pointer"}}
            >
                Create account.{" "}
                <span className="text-primary fw-bold">It&apos;s free!</span>
                <img src="/drop-down.svg" alt="drop-down" width={24} />
            </p>
        </nav>
    );
};

export default Nav;
