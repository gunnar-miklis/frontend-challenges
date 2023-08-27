import { Button } from '@mui/material';
import { styleGuide } from '../../../styleGuide';

export default function CommonButton( { title, isActive, onClick, disabled } ) {
	return (
		<Button
			variant='contained'
			fullWidth
			sx={ isActive ? { backgroundColor: styleGuide.colors.main, color: styleGuide.colors.darkCyan } : {} }
			disabled={disabled}
			onClick={onClick}
		>
			{title}
		</Button>
	);
}
