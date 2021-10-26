import { observer } from 'mobx-react-lite';
import React from 'react';
import counter from './store/counter';

const Counter = observer(() => {
	return (
		<div>
			Counter: {counter.count}<br/>
			<button className="btn" onClick={()=>counter.increment()}>+</button>
			<button className="btn" onClick={()=>counter.decrement()}>-</button>
		</div>
	);
})

export default Counter;