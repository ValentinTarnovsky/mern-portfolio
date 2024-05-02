import { Box } from "@mui/material";
import { useContext } from "react";
import "./about.scss";

import MyContext from "../../contexts/MyContext";

import AboutMe from "./AboutMe";

const About = () => {
    const { langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.about && langData.about[prop] ? langData.about[prop] : prop;
    return (
        <Box
            className="about container spacing"
            id="about"
            data-aos="fade-up">
            <h3 className="title">{getLangText("title")}</h3>
            <Box className="about__cont">
                <Box className="about__cont__table">
                    <table>
                        <tbody>
                            <tr>
                                <td className="item">{getLangText("name")}</td>
                                <td className="subitem">Valentin Tarnovsky</td>
                            </tr>
                            <tr>
                                <td className="item">{getLangText("age")}</td>
                                <td className="subitem">21</td>
                            </tr>
                            <tr>
                                <td className="item">{getLangText("country")}</td>
                                <td className="subitem">Argentina</td>
                            </tr>
                            <tr>
                                <td className="item">{getLangText("languages")}</td>
                                <td className="subitem">{getLangText("languages2")}</td>
                            </tr>
                            <tr>
                                <td className="item">{getLangText("objetive")}</td>
                                <td className="subitem">{getLangText("objetive2")}</td>
                            </tr>
                            <tr>
                                <td className="item">{getLangText("passion")}</td>
                                <td className="subitem">{getLangText("passion2")}</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Box className="about__cont__text">
                    <AboutMe/>
                </Box>
            </Box>
            <Box className="about__cv">
                <a
                    href="/pdf/CV-Tarnovsky-Valentin-en.pdf"
                    download>
                    <div className="animated-button">
                        {getLangText("download")}<span></span><span></span><span></span><span></span>
                    </div>
                </a>
            </Box>
        </Box>
    );
};

export default About;