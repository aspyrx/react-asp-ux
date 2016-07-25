import { PropTypes } from 'react';

import aspUx from './index.less';

export default function design(design = 'default') {
    return aspUx[design];
}

export const designShape = PropTypes.oneOf([
    'default', 'primary', 'success', 'warning', 'danger'
]);

