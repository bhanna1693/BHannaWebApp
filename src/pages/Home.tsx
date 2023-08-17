import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export const HomePage = () => {
    return (
        <section className="">
            <div className="text-center">
                <h1>Welcome to my website!</h1>

                <h2>I built this site using a variety of languages/frameworks/services in order
                    to keep up with the latest changes in technology.</h2>

            </div>
            <div>
                <div>
                    <h3 className="tooltip" data-tip="Go to Frontend Github repository">
                        <a className="flex items-center" href="https://github.com/bhanna1693/BHannaWebApp" target="_blank" rel="noreferrer">
                            Front End:
                            <ArrowTopRightOnSquareIcon className={"h-5 w-5 ml-4"} />
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
                        <a className="flex items-center" href="https://github.com/bhanna1693/happyhour" target="_blank" rel="noreferrer">
                            Happy Hour Back End:
                            <ArrowTopRightOnSquareIcon className={"h-5 w-5 ml-4"} />
                        </a>
                    </h3>
                    <ul>
                        <li>Spring Boot & Java app running on AWS Fargate via App Runner</li>
                        <li>Python background process running on AWS Lambda</li>
                        <li>Postgres database running on AWS RDS</li>
                    </ul>
                </div>

                <div>
                    <h3>CI/CD:</h3>
                    <ul>
                        <li>GitHub source control</li>
                        <li>GitHub Workflows for both Front & Back End</li>
                        <li>Docker containerization</li>
                        <li>Front End app deployed on GitHub for free :)</li>
                    </ul>
                </div>

                <div>
                    <h3>Authentication:</h3>
                    <ul>
                        <li>Using OAuth 2.0 Authorization Framework</li>
                        <li>Client: Front End app</li>
                        <li>Resource Server: All Back End apps</li>
                        <li>Authorization Server: Auth0</li>
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
