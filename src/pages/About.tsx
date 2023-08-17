export const AboutPage = () => {


    const handleClick = () => {
        const resumeFile = `${process.env.PUBLIC_URL!}/resume/2_Page_Resume_FS_SE.pdf`
        window.open(resumeFile, "_blank")
    };
    return (
        <section className="">
            <h1>Ready to work. Please hire me :)</h1>

            <button className="btn btn-primary" onClick={handleClick}>
                Click to download & view resume
            </button>
        </section>
    )
}
