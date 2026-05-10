import type { SkillType } from "../types/skillType";

interface Props {
    data: SkillType;
}

const SkilLCard = (props: Props) => {
    const { data } = props;

    return (
        <div className="skill-card">
            <div className="skill-card--title">
                <h3>{data.title}</h3>
            </div>
            <div className="skill-card--content">
                {data.content.map((item, _) => (
                    <p key={_}>{item}</p>
                ))}
            </div>
        </div>
    );
};

export default SkilLCard;
