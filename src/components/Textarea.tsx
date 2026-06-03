interface TextAreaProps {
    textareaRef?: any;
    textAreValue: string;
    textAreaOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
    placeholder: string;
    label: string;
}
const TextArea = (props: TextAreaProps) => {
    return (
        <figcaption className="text-area">
            <label>{props.label}</label>
            <textarea
                ref={props.textareaRef}
                value={props.textAreValue}
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                onChange={props.textAreaOnChange}
            />
        </figcaption>
    );
};

export default TextArea;
