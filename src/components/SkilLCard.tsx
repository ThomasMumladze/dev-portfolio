// ========== skill interface ========== //
import type { SkillType } from "../types/skillType";

// ========== skill icon svg ========== //
import { front_end_icon, back_end_icon, tool_icon } from "../assets/icon";

// ========== component import ========== //
import H3 from "./H3";

// ========== props interface ========== //
interface Props {
    data: SkillType;
}

const icons = {
    ...front_end_icon,
    ...back_end_icon,
    ...tool_icon,
};

const SkilLCard = (props: Props) => {
    const { data } = props;

    return (
        <div className="skill-card">
            <div className="skill-card--title">
                <H3 title={data.title} />
            </div>
            <div className="skill-card--content">
                {data.content.map((item, index) => {
                    // ========== selects icons form icon.ts and compare it to item.cion ========== //
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
