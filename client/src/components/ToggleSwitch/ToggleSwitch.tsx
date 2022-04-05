import { ChangeEvent, useState } from 'react';

import { Input, Label, Switch, Topic } from './styles';

interface IProps  {
  topic: 'HTML' | 'CSS' | 'JS';
};

export const ToggleSwitch: React.FC<IProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <Topic>{props.topic}</Topic>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};