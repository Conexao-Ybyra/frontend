import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Calendario() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='tracking-wide flex self-center px-10 pt-5'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendario;