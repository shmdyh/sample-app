//例 Button.stories.js
import Button from '.';
import React, {ReactElement} from "react";

export default {
 title: 'Button Component',
 component: Button,
}

export const Primary:React.FC = ():ReactElement => {
    return <Button />;
};