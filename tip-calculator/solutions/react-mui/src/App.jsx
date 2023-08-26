import iconDollar from './assets/icon-dollar.svg';
import iconPerson from './assets/icon-person.svg';
import { useEffect, useState } from 'react';
import {
	Alert,
	Box,
	Button,
	Container,
	FilledInput,
	Grid,
	InputAdornment,
	InputLabel,
	Snackbar,
	Typography,
} from '@mui/material';

export default function App() {
	const [ bill, setBill ] = useState( 0 );
	const [ tip, setTip ] = useState( 0 );
	const [ people, setPeople ] = useState( 0 );
	const [ tipAmount, setTipAmount ] = useState( 0 );
	const [ total, setTotal ] = useState( 0 );
	const [ showSnackbar, setShowSnackbar ] = useState( false );

	useEffect( () => {
		if ( bill && tip && people ) {
			const percentage = ( bill / 100 ) * tip;

			const tipAmountCalculated = percentage / people;
			setTipAmount( tipAmountCalculated.toFixed( 2 ) );

			const totalCalculated = ( bill / people ) + tipAmountCalculated;
			setTotal( totalCalculated.toFixed( 2 ) );
		}
	}, [ bill, tip, people ] );

	function handleTip( percentage ) {
		setTip( percentage );
	}

	function handleCloseSnackbar() {
		setShowSnackbar( false );
	}

	function handleReset() {
		setShowSnackbar( true );
		setBill( 0 );
		setTip( 0 );
		setPeople( 0 );
		setTipAmount( 0 );
		setTotal( 0 );
	}

	return (
		<>
			<Container maxWidth='sm'>
				<Grid container justifyContent="center">

					<Grid item>
						<Typography variant='h1'>SPLITTER</Typography>
					</Grid>

					<Grid item>

						<Grid item>

							<InputLabel htmlFor="input-with-icon-adornment">Bill</InputLabel>
							<FilledInput
								id="input-with-icon-adornment"
								onChange={ ( e ) => e.target.value > 0 ? setBill( Number( e.target.value ) ) : setBill( 0 ) }
								value={ bill > 0 ? bill : '' }
								type='number'
								disableUnderline
								startAdornment={
									<InputAdornment position="start">
										<img src={iconDollar} alt='icon-dollar'/>
									</InputAdornment>
								}
							/>

							<InputLabel>Select Tip %</InputLabel>
							<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%' }}>
								{
									tip === 5 ?
										<Button
											variant='contained'
											sx={{ width: '45%', backgroundColor: 'mainAccent', color: 'darkCyan' }}
											onClick={ () => handleTip( 5 ) }>
										5%
										</Button> :
										<Button
											variant='contained'
											sx={{ width: '45%' }}
											onClick={ () => handleTip( 5 ) }>
										5%
										</Button>
								}
								{
									tip === 10 ?
										<Button
											variant='contained'
											sx={{ width: '45%', backgroundColor: 'mainAccent', color: 'darkCyan' }}
											onClick={ () => handleTip( 10 ) }>
										10%
										</Button> :
										<Button
											variant='contained'
											sx={{ width: '45%' }}
											onClick={ () => handleTip( 10 ) }>
										10%
										</Button>
								}
								{
									tip === 15 ?
										<Button
											variant='contained'
											sx={{ width: '45%', backgroundColor: 'mainAccent', color: 'darkCyan' }}
											onClick={ () => handleTip( 15 ) }>
										15%
										</Button> :
										<Button
											variant='contained'
											sx={{ width: '45%' }}
											onClick={ () => handleTip( 15 ) }>
										15%
										</Button>
								}
								{
									tip === 25 ?
										<Button
											variant='contained'
											sx={{ width: '45%', backgroundColor: 'mainAccent', color: 'darkCyan' }}
											onClick={ () => handleTip( 25 ) }>
										25%
										</Button> :
										<Button
											variant='contained'
											sx={{ width: '45%' }}
											onClick={ () => handleTip( 25 ) }>
										25%
										</Button>
								}
								{
									tip === 50 ?
										<Button
											variant='contained'
											sx={{ width: '45%', backgroundColor: 'mainAccent', color: 'darkCyan' }}
											onClick={ () => handleTip( 50 ) }>
										50%
										</Button> :
										<Button
											variant='contained'
											sx={{ width: '45%' }}
											onClick={ () => handleTip( 50 ) }>
										50%
										</Button>
								}
								<FilledInput
									type='nummber'
									disableUnderline
									sx={{ width: '45%' }}
									placeholder='Custom'
									onChange={ ( e ) => e.target.value > 0 ? setTip( Number( e.target.value ) ) : setTip( 0 ) } />
							</Box>

							<InputLabel htmlFor="input-with-icon-adornment">Number of People</InputLabel>
							<FilledInput
								id="input-with-icon-adornment"
								onChange={ ( e ) => e.target.value > 0 ? setPeople( Number( e.target.value ) ) : setPeople( 0 ) }
								value={ people > 0 ? people : '' }
								type='number'
								disableUnderline
								startAdornment={
									<InputAdornment position="start">
										<img src={iconPerson} alt='icon-person'/>
									</InputAdornment>
								}
							/>

						</Grid>


						<Grid item>
							<Box sx={{ backgroundColor: 'darkCyan', color: 'lightGrayishCyan', padding: '20px', borderRadius: '10px' }}>
								<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
									<Box>
										<Typography variant='body1' sx={{ color: 'whiteText' }}>Tip Amount</Typography>
										<Typography variant='body2' sx={{ fontSize: '18px', color: 'grayishCyan' }}>/ person</Typography>
									</Box>
									<Box>
										<Typography variant='h3' sx={{ fontSize: '32px', color: 'mainAccent' }}>${tipAmount}</Typography>
									</Box>
								</Box>
								<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
									<Box>
										<Typography variant='body1' sx={{ color: 'whiteText' }}>Total</Typography>
										<Typography variant='body2' sx={{ fontSize: '18px', color: 'grayishCyan' }}>/ person</Typography>
									</Box>
									<Box>
										<Typography variant='h3' sx={{ fontSize: '32px', color: 'mainAccent' }}>${total}</Typography>
									</Box>
								</Box>
								<Button
									variant='contained'
									sx={{ backgroundColor: 'mainAccent', color: 'darkCyan' }}
									fullWidth
									onClick={ () => handleReset() }>
									RESET
								</Button>
							</Box>
						</Grid>


					</Grid>


					<Grid item>
						<Snackbar
							open={showSnackbar}
							autoHideDuration={6000}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							onClose={handleCloseSnackbar}>
							<Alert
								onClose={handleCloseSnackbar}
								severity="success"
								sx={{ width: '100%' }}>
							This is a success message!
							</Alert>
						</Snackbar>
					</Grid>

				</Grid>
			</Container>

		</>
	);
}
