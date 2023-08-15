import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export const HomePage = () => {
    return (
        <section className="container mx-auto">
            <div className="text-center">
                <h1>Welcome to my website!</h1>

                <h2>I build this site using a variety of languages/frameworks/technologies in order
                    to keep up with the latest changes in technology.</h2>

            </div>
            <div>
                <div>
                    <h3 className="tooltip" data-tip="Go to Frontend Github repository">
                        <a className="btn btn-ghost" href="https://github.com/bhanna1693/BHannaWebApp" target="_blank" rel="noreferrer">
                            Front End:
                            <ArrowTopRightOnSquareIcon className={"h-5 w-5"} />
                        </a>
                    </h3>
                    <ul>
                        <li>React typescript front end</li>
                        <li>React Query</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                        <li>Daisy UI</li>
                    </ul>
                </div>

                <div>
                    <h3 className="tooltip" data-tip="Go to Backend Github repository">
                        <a className="btn btn-ghost" href="https://github.com/bhanna1693/happyhour" target="_blank" rel="noreferrer">
                            Back End:
                            <ArrowTopRightOnSquareIcon className={"h-5 w-5"} />
                        </a>
                    </h3>
                    <ul>
                        <li>Happy Hour: Spring Boot & Java running on AWS Fargate via App Runner</li>
                        <li>Happy Hour: Python background process running on AWS Lambda</li>
                        <li>Happy Hour: Postgres database running on AWS RDS</li>
                    </ul>
                </div>

                <div>
                    <h3>CI/CD:</h3>
                    <ul>
                        <li>GitHub repository</li>
                        <li>GitHub Workflows for both Front & Back End</li>
                        <li>Docker containerization</li>
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <p><i>This site costs $$$! If things aren't working properly, it's probably because I shut some
                    services down to save money.</i></p>
                <p><i>Please email me at `bhanna1693@gmail.com` and I will make sure all services are up and
                    running.</i></p>
            </div>
        </section>
    )
}
