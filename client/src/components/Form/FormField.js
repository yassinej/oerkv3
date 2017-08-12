import React from 'react';

export default ({ input, type, label, meta: { error, touched } }) => {
	return (
		<div className="">
			<label>
				{label}
			</label>
			<input {...input} type={type} style={{ marginBottom: '5px' }} />
			<div style={{ color: 'red', marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
