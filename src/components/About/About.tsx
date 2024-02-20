
const About = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-evenly content-between uppercase">
            <div className="text-2xl font-normal text-white font-game2 flex items-center justify-center">
                About Us
            </div>
            <div className="flex flex-col max-w-[61%] pl-32 space-y-6">
                <div className="text-2xl font-normal text-white font-game2">What's GDSC?</div>
                <div className="text-2xl font-normal text-white font-game1">
                    Google collaborates with university students who are passionate about growing developer communities. GDSC is an Organisation for university students who want to bring about a change through technology. We are focused upon building technical and non-technical skills, which would help students to build a better community.
                </div>
            </div>
            <div className="flex flex-col max-w-[61%] pl-32 space-y-6">
                <div className="text-2xl font-normal text-white font-game2">What GDSC GHRIETN does?</div>
                <ul className="text-2xl font-normal text-white font-game1 list-disc list-inside pl-4">
                    <li className="leading-none">Projects</li>
                    <li className="leading-none">Seminars</li>
                    <li className="leading-none">Hackathons</li>
                    <li className="leading-none">Study Jams</li>
                </ul>
            </div>
        </div>
    )
}

export default About
