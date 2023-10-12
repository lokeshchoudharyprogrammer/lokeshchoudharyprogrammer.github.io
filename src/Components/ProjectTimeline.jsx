import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
function ProjectTimeline() {
    const btn = {
        padding: "9px 17px",
        borderRadius: "5px",
        border: "2px solid green",
        color: "black",
        background: "azure"
    };
    return (
        <div className="App" id='projects'>
            <h1 className="project-heading" style={{ color: ' #c110ef', paddingLeft: "39px" }}>
                My<strong className="purple"> Projects </strong>
            </h1>
            <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
            </p>
            <VerticalTimeline animate={true} layout={"2-columns"} lineColor={"Black"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "azure",
                        color: "black",
                        boxShadow:
                            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(47 36 84)" }}
                    
                    iconStyle={{
                        background: "rgb(47 36 84)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    icon={"L"}
                >
                    <h3 className="project-title vertical-timeline-element-title">
                        Lenskart Clone
                    </h3>
                    <img
                        width="142px"
                        style={{
                            marginTop: "19px",
                            borderRadius: "12px",
                            boxShadow:
                                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        }}
                        src="https://camo.githubusercontent.com/b87006215dc9e036dae18178b702551da7b1181affaad80a334ddfa4616bfa58/68747470733a2f2f692e706f7374696d672e63632f4a305930586d66432f53637265656e73686f742d313934302e706e67"
                        alt=""
                    />
                    <p class="project-description">
                        Developed a full-stack web application using React.js, Node.js,
                        Express.js, and MongoDB.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                        class="project-tech-stack"
                    >
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                    >
                        <button style={btn} class="project-github-link">
                            <a target="_blank" href="https://github.com/RutuvikP/ClearDekho-Lenskart-Clone">

                                Github
                            </a>
                        </button>
                        <button style={btn} class="project-deployed-link">
                            <a target="_blank" href="https://cleardekho-rutuvikp.vercel.app/">

                                Demo
                            </a>
                        </button>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "azure",
                        color: "black",
                        boxShadow:
                            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(47 36 84)" }}
                    
                    iconStyle={{
                        background: "rgb(47 36 84)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    icon={"S"}
                >
                    <h3 className="project-title vertical-timeline-element-title">
                        Solution.com Clone
                    </h3>
                    <img
                        width="142px"
                        style={{
                            marginTop: "19px",
                            borderRadius: "12px",
                            boxShadow:
                                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        }}
                        src="https://themeforest.img.customer.envatousercontent.com/files/330747686/Previews/01_Analytics.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=27a9bfe3e41060a005fb9bf5232149fa"
                        alt=""
                    />
                    <p class="project-description">
                        Boost your team’s alignment, efficiency, and productivity by
                        customizing any workflow to fit your needs.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                        class="project-tech-stack"
                    >
                        <img
                            src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                    >
                        <button style={btn} class="project-github-link">
                            <a target="_blank" href="https://github.com/lokeshchoudharyprogrammer/superficial-point-8316">

                                Github
                            </a>
                        </button>
                        <button style={btn} class="project-deployed-link">
                            <a target="_blank" href="https://unrivaled-tulumba-195798.netlify.app/">

                                Demo
                            </a>
                        </button>
                    </div>
                </VerticalTimelineElement>

                {/* 3 */}

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "azure",
                        color: "black",
                        boxShadow:
                            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(47 36 84)" }}
                    
                    iconStyle={{
                        background: "rgb(47 36 84)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    icon={"Z"}
                >
                    <h3 className="project-title vertical-timeline-element-title">
                        Zoom Clone
                    </h3>
                    <img
                        width="142px"
                        style={{
                            marginTop: "19px",
                            borderRadius: "12px",
                            boxShadow:
                                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        }}
                        src="https://camo.githubusercontent.com/76c562e2c3b1559dd40eb41723210165de31ef9cce213da2fb50d1c7a5a2de3e/68747470733a2f2f692e6962622e636f2f726378565648432f63616c6c6170702e706e67"
                        alt=""
                    />
                    <p class="project-description">
                        Introducing our innovative video call app, seamlessly connecting
                        users through high-quality video and audio communication. Enjoy
                        group calls, screen sharing, and secure conversations, redefining
                        virtual interactions for both personal and professional use.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                        class="project-tech-stack"
                    >
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                            alt=""
                        />

                        <img
                            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/Zegocloud-7B00FF?style=for-the-badge&logo=upcloud&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                    >
                        <button style={btn} class="project-github-link">
                            <a target="_blank" href="https://github.com/lokeshchoudharyprogrammer/zoom-clone-app">

                                Github
                            </a>
                        </button>
                        <button style={btn} class="project-deployed-link">
                            <a target="_blank" href="https://callingapp.vercel.app/">

                                Demo
                            </a>
                        </button>
                    </div>
                </VerticalTimelineElement>

                {/* 4 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "azure",
                        color: "black",
                        boxShadow:
                            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid  rgb(47 36 84)" }}
                    
                    iconStyle={{
                        background: "rgb(47 36 84)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    icon={"G"}
                >
                    <h3 className="project-title vertical-timeline-element-title">
                        Grammar Correction Open AI Extension
                    </h3>
                    <img
                        width="142px"
                        style={{
                            padding: "12px",
                            marginTop: "19px",
                            borderRadius: "12px",
                            boxShadow:
                                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        }}
                        src="https://lokeshchoudhary.gallerycdn.vsassets.io/extensions/lokeshchoudhary/grammar-correction-open-ai/0.1.7/1694601849434/Microsoft.VisualStudio.Services.Icons.Default"
                        alt=""
                    />
                    <p class="project-description">
                        Visual Studio Code extension allows you to correct grammar and
                        improve your writing using the OpenAI API.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                        class="project-tech-stack"
                    >
                        <img
                            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                            alt=""
                        />

                        <img
                            src="https://img.shields.io/badge/Vs Code API-380953?style=for-the-badge&logo=progate&logoColor=white"
                            alt=""
                        />
                        <img
                            src="https://img.shields.io/badge/Open AI-66595C?style=for-the-badge&logo=Atom&logoColor=white"
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginTop: "12px"
                        }}
                    >
                        <button style={btn} class="project-github-link">
                            <a target="_blank" href="https://github.com/lokeshchoudharyprogrammer/Grammar-Correction-VSCode-Extension">

                                Github
                            </a>
                        </button>
                        <button style={btn} class="project-deployed-link">
                            <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=LokeshChoudhary.grammar-correction-open-ai">

                                Demo
                            </a>
                        </button>
                    </div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
}

export default ProjectTimeline;
