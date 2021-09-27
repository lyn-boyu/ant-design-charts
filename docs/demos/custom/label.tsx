import { FormWrapper } from '@ant-design/charts';
import { Input } from 'antd';
import React, { useState, useEffect, Fragment } from 'react';

const InputComponent: React.FC<any> = (props) => {
  const { config, plugin = {} } = props;
  const { placeholder, disabled } = config;
  const { updateEdge } = plugin;
  const [label, setLabel] = useState<string>(config?.label);

  const onLabelChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    updateEdge({
      label: e.target.value,
    });
  };

  useEffect(() => {
    setLabel(config?.label);
  }, [config]);

  return (
    <div>
      <label>标签: </label>
      <Input value={label} onChange={onLabelChange} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export const EdgeLabel: React.FC = (props) => {
  return (
    <FormWrapper {...props} type="edge">
      {(config, plugin) => <InputComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};