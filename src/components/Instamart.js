import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <button
                className="cursor-pointer"
                onClick={() => {
                    isVisible ? setIsVisible(false) : setIsVisible(true)
                }}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <p>{description}</p>}
        </div>
    );
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");

    return (
        <div>
            <h1 className="text-center font-bold text-3xl p-2 m-2">Instamart</h1>
            <Section
                title={"About"}
                description={"This is the about section of Instamart. This is the about section of Instamart. "}
                isVisible={visibleSection === "About"}
                setIsVisible={() => {
                    visibleSection === "About" ? setVisibleSection("") : setVisibleSection("About")
                }}
            />

            <Section
                title={"Team"}
                description={"This is the team section of Instamart. This is the team section of Instamart. "}
                isVisible={visibleSection === "Team"}
                setIsVisible={() => {
                    visibleSection === "Team" ? setVisibleSection("") : setVisibleSection("Team")
                }}
            />

            <Section
                title={"Careers"}
                description={"This is the Careers section of Instamart. This is the Careers section of Instamart."}
                isVisible={visibleSection === "Careers"}
                setIsVisible={() => {
                    visibleSection === "Careers" ? setVisibleSection("") : setVisibleSection("Careers")
                }}
            />
        </div>
    )
};

export default Instamart;