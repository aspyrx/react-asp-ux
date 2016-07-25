import React from 'react';
import classNames from 'classnames';
import designs, { designShape } from '../designs';

import styles from './Button.less';

export default function Button(props) {
    const { className, children, design, ...rest } = props;
    const classes = classNames(className, styles.button, designs(design));

    return <button className={classes} {...rest}>{children}</button>
}

Button.propTypes = {
    design: designShape,
    className: React.PropTypes.string,
    children: React.PropTypes.node
}

