import { Badge } from '../Badge';
import { Input, Label } from './styles';

interface IProps  {
  topic: 'HTML' | 'CSS' | 'JS';
  disabled?: boolean;
};
// rename to TopicSelect
export const Checkbox: React.FC<IProps> = ({ topic, disabled }) => {

  return (
    <>
      <Label>
        { topic }
        <Badge badgeContent={3} />
        <Input
          type="checkbox"
          disabled={!disabled}
        />
      </Label>
    </> 
  );
};