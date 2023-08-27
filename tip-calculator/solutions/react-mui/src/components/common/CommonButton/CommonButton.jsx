import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { styleGuide } from '../../../styleGuide';

export default function CommonButton( { title, isActive, onClick, disabled } ) {
	const [ active, setActive ] = useState( {} );

	useEffect( () => {
		if ( isActive ) {
			setActive( {
				backgroundColor: styleGuide.colors.main,
				color: styleGuide.colors.darkCyan,
			} );
		} else {
			setActive( {} );
		}
	}, [ isActive ] );

	return (
		<Button
			variant='contained'
			fullWidth
			sx={active}
			disabled={disabled}
			onClick={onClick}
		>
			{title}
		</Button>
	);
}
