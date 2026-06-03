// ========== React ========== //
import { useState } from "react";

// ========== Constants ========== //
import H3 from "../../../components/H3";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

// ========== Constants ========== //
import { BACK_END_SKILLS, FRONT_END_SKILLS, TOOL_SKILLS } from "../../../constants/Skills";

const AddSkills = () => {
    const [activeSkill, setActiveSkill] = useState<"front-end" | "back-end" | "tool">("front-end");

    const [selectedFrontEndSkills, setSelectedFrontEndSkills] = useState<string[]>([]);
    const [selectedBackEndSkills, setSelectedBackEndSkills] = useState<string[]>([]);
    const [selectedTools, setSelectedTools] = useState<string[]>([]);

    return (
        <div className="add-skills">
            <H3 title="add skills" />
            <div className="add-skills--skills-selector">
                <Button
                    btnClassName={`${activeSkill === "front-end" ? "btn-active" : ""}`}
                    clickFunction={() => setActiveSkill("front-end")}
                >
                    front-end
                </Button>
                <Button
                    btnClassName={`${activeSkill === "back-end" ? "btn-active" : ""}`}
                    clickFunction={() => setActiveSkill("back-end")}
                >
                    back-end
                </Button>
                <Button
                    btnClassName={`${activeSkill === "tool" ? "btn-active" : ""}`}
                    clickFunction={() => setActiveSkill("tool")}
                >
                    tool
                </Button>
            </div>
            <div className="add-skills--skills-list">
                {activeSkill === "front-end" &&
                    FRONT_END_SKILLS.map((skill) => (
                        <label key={skill}>
                            <div className="--skill">
                                <input
                                    type="checkbox"
                                    value={skill}
                                    checked={selectedFrontEndSkills.includes(skill)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedFrontEndSkills([...selectedFrontEndSkills, skill]);
                                        } else {
                                            setSelectedFrontEndSkills(selectedFrontEndSkills.filter((s) => s !== skill));
                                        }
                                    }}
                                />
                                {skill}
                            </div>
                        </label>
                    ))}

                {activeSkill === "back-end" &&
                    BACK_END_SKILLS.map((skill) => (
                        <label key={skill}>
                            <div className="--skill">
                                <input
                                    type="checkbox"
                                    value={skill}
                                    checked={selectedBackEndSkills.includes(skill)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedBackEndSkills([...selectedBackEndSkills, skill]);
                                        } else {
                                            setSelectedBackEndSkills(selectedBackEndSkills.filter((s) => s !== skill));
                                        }
                                    }}
                                />
                                {skill}
                            </div>
                        </label>
                    ))}

                {activeSkill === "tool" &&
                    TOOL_SKILLS.map((skill) => (
                        <label key={skill}>
                            <div className="--skill">
                                <input
                                    type="checkbox"
                                    value={skill}
                                    checked={selectedTools.includes(skill)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setSelectedTools([...selectedTools, skill]);
                                        } else {
                                            setSelectedTools(selectedTools.filter((s) => s !== skill));
                                        }
                                    }}
                                />
                                {skill}
                            </div>
                        </label>
                    ))}
            </div>

            <div className="add-skills--field">
                <Input label="experience" onChangeFunc={() => {}} placeholder="E.G 1.5 year" type="text" />
            </div>
            <div className="add-skills--field">
                <div className="selected-skills">
                    <label>front-end</label>
                    <div>{selectedFrontEndSkills.join(", ") || "No front-end skills selected"}</div>
                </div>
                <div className="selected-skills">
                    <label>back-end</label>
                    <div>{selectedBackEndSkills.join(", ") || "No back-end skills selected"}</div>
                </div>
                <div className="selected-skills">
                    <label>tools</label>
                    <div>{selectedTools.join(", ") || "No tools selected"}</div>
                </div>
            </div>
        </div>
    );
};

export default AddSkills;
