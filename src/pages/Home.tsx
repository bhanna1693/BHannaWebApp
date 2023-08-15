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
                    <h3>Front End:</h3>
                    <ul>
                        <li>React typescript front end</li>
                        <li>React Query</li>
                        <li>React Router</li>
                        <li>Tailwind CSS</li>
                        <li>Daisy UI</li>
                    </ul>
                </div>

                <div>
                    <h3>Back End:</h3>
                    <ul>
                        <li>Happy Hour: Spring Boot & Java running on AWS Fargate via App Runner</li>
                        <li>Happy Hour: Python background process running on AWS Lambda</li>
                        <li>Happy Hour: Postgres database running on AWS RDS</li>
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
