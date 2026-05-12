import type { SkillType } from "../types/skillType";

import { front_end_icon, back_end_icon } from "../assets/icon";

interface Props {
    data: SkillType;
}

const icons = {
    ...front_end_icon,
    ...back_end_icon,
};

const SkilLCard = (props: Props) => {
    const { data } = props;

    return (
        <div className="skill-card">
            <div className="skill-card--title">
                <h3>{data.title}</h3>
            </div>
            <div className="skill-card--content">
                {data.content.map((item, index) => {
                    const Icon = icons[item.icon as keyof typeof icons];

                    return (
                        <div key={index} className="skill-item">
                            <div className="skill-item--icon"> {Icon && <Icon size={22} />}</div>
                            <div className="skill-item--description">
                                <p>{item.name}</p>
                                <span>{item.experience}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkilLCard;
