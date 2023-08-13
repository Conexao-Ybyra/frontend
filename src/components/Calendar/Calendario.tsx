import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendario() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='tracking-wide flex self-center'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendario;