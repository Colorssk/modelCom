import { Button, Tooltip } from 'antd';
import React from 'react';
import './themeStyle/index.less';

const LButton = ({
  className,
  type,
  disabled,
  tooltip,
  width,
  ...restProps
} : any) => {
  let typeClass = 'u-button-wrapper-basic';
  if (disabled) {
    type = 'gray';
  }
  if (type) {
    switch (type) {
    case 'gray':
      typeClass = 'u-button-wrapper-gray';
      break;
    case 'blue':
      typeClass = 'u-button-wrapper-blue';
      break;
    }
  }
  return <div className={[ 'u-button-wrapper', typeClass ].join(' ')}>
    <Tooltip title={tooltip}>
      <Button
        size="small"
        style={{ width }}
        disabled={disabled}
        className={className}
        {...restProps}
      >
        {restProps.children}
      </Button>
    </Tooltip>
  </div>;
};

export default LButton;