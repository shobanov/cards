import { Badge } from '../Badge';
import { Input, Label } from './styles';

interface IProps  {
  topic: 'HTML' | 'CSS' | 'JS';
};

export const Checkbox: React.FC<IProps> = ({ topic }) => {
  // const [checked, setChecked] = useState<boolean>(false);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setChecked(e.target.checked);
  // };

  return (
    <>
      <Label>
        { topic }
        <Badge badgeContent={3} />
        <Input
          type="checkbox"
        />
      </Label>
    </> 
  );
};