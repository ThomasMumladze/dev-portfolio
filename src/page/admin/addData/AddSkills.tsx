import { useState } from "react";

import H3 from "../../../components/H3";

import Button from "../../../components/Button";

import { BACK_END_SKILLS, FRONT_END_SKILLS, TOOL_SKILLS } from "../../../constants/Skills";

const AddSkills = () => {
    const [activeCategory, setActiveCategory] = useState<"front-end" | "back-end" | "tool">("front-end");

    const categoryMap = {
        "front-end": FRONT_END_SKILLS,
        "back-end": BACK_END_SKILLS,
        tool: TOOL_SKILLS,
    };

    return (
        <div className="add-skills">
            <H3 title="add skills" />
            <div className="add-skills--skills-selector">
                <Button clickFunction={() => setActiveCategory("front-end")}>front-end</Button>
                <Button clickFunction={() => setActiveCategory("back-end")}>back-end</Button>
                <Button clickFunction={() => setActiveCategory("tool")}>tool</Button>
            </div>
            <div className="add-skills--skills-list">
                {categoryMap[activeCategory]?.map((skill) => (
                    <label key={skill}>
                        <div className="--skill">
                            <input type="checkbox" value={skill} />
                            {skill}
                        </div>
                    </label>
                ))}
            </div>

            <div className="add-skills--field">
                <label>Project Name</label>
                <input type="text" placeholder="project nama" />
            </div>
            <div className="add-skills--field">
                <label>selected skill</label>
                <input type="text" placeholder="selected skill" readOnly cursor-not-allowed />
            </div>
        </div>
    );
};

export default AddSkills;
