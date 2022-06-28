import React from 'react';
import Switch from 'react-switch';
import { NoParamFunction } from '../../types';

interface Props {
    onChange: NoParamFunction;
    initialValue: boolean;
}

const SwitchComponent: React.FC<Props> = function SwitchComponent({ onChange, initialValue }) {
  return (
    <Switch
      onChange={onChange}
      checked={initialValue}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={35}
      handleDiameter={20}
      offHandleColor="#777"
      offColor="#333"
      onColor="#ccc"
    />
  );
};

export default SwitchComponent;
