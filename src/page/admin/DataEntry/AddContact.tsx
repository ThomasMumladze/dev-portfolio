// ========== React ========== //
import { useState } from "react";
import H3 from "../../../components/H3";
import Input from "../../../components/Input";

const AddContact = () => {
    const [socialUrls, setSocialUrls] = useState<{
        linkedIn: string | null;
        gitHub: string | null;
        facebook: string | null;
        instagram: string | null;
    }>({
        linkedIn: null,
        gitHub: null,
        facebook: null,
        instagram: null,
    });

    return (
        <div className="add-contact">
            <H3 title="add contact" />
            <div className="add-contact--inputs">
                <Input label="Email" placeholder="Add Email" onChangeFunc={() => {}} type="text" />
                <Input label="Address" placeholder="Add Address" onChangeFunc={() => {}} type="text" />
            </div>
            <hr />
            <div className="add-contact--inputs">
                <Input
                    label="linkedIN"
                    placeholder="Add linkedIN"
                    value={socialUrls.linkedIn}
                    onChangeFunc={(value) => setSocialUrls({ ...socialUrls, linkedIn: value })}
                    type="text"
                />
                <Input
                    label="GitHub"
                    placeholder="Add GitHub"
                    value={socialUrls.gitHub}
                    onChangeFunc={(value) => setSocialUrls({ ...socialUrls, gitHub: value })}
                    type="text"
                />
                <Input
                    label="Facebook"
                    placeholder="Add Facebook"
                    value={socialUrls.facebook}
                    onChangeFunc={(value) => setSocialUrls({ ...socialUrls, facebook: value })}
                    type="text"
                />
                <Input
                    label="Instagram"
                    placeholder="Add Instagram"
                    value={socialUrls.instagram}
                    onChangeFunc={(value) => setSocialUrls({ ...socialUrls, instagram: value })}
                    type="text"
                />
            </div>
        </div>
    );
};

export default AddContact;
