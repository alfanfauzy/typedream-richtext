import React from "react";
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineUnderline,
} from "react-icons/ai";

import { BsCode } from "react-icons/bs";

const iconList = {
    bold: <AiOutlineBold size={18} />,
    italic: <AiOutlineItalic size={18} />,
    underline: <AiOutlineUnderline size={18} />,
    code: <BsCode size={18} />,
};

const Icon = (props) => {
    const { icon } = props;
    return iconList[icon];
};

export default Icon;
