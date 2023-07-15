import './App.css';
import iconDollar from './assets/icon-dollar.svg';
import iconPerson from './assets/icon-person.svg';
import { useEffect, useState } from 'react';
import {
	Alert,
	Button,
	Container,
	Grid,
	Input,
	InputAdornment,
	InputLabel,
	Snackbar,
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
			const percentage = ( tip / bill ) * 100;

			const tipAmountCalculated = +( percentage / people ).toFixed( 2 );
			setTipAmount( tipAmountCalculated );

			const totalCalculated = +( ( bill - percentage ) / people ).toFixed( 2 );
			setTotal( totalCalculated );
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

	console.log( 'bill :>> ', bill );
	console.log( 'tip :>> ', tip );
	console.log( 'people :>> ', people );
	console.log( 'tipAmount :>> ', tipAmount );
	console.log( 'total :>> ', total );

	return (
		<>
			<Container maxWidth='sm'>
				<Grid container justifyContent="center">

					<h1>SPLITTER</h1>

					<Grid item className='component'>

						<Grid item>
							<InputLabel htmlFor="input-with-icon-adornment">Bill</InputLabel>
							<Input
								id="input-with-icon-adornment"
								onChange={ ( e ) => e.target.value > 0 ? setBill( e.target.value ) : setBill( 0 ) }
								value={ bill > 0 ? bill : '' }
								type='number'
								startAdornment={
									<InputAdornment position="start">
										<img src={iconDollar} alt='icon-dollar'/>
									</InputAdornment>
								}
							/>
						</Grid>

						<Grid item>
							<InputLabel>Tip</InputLabel>
							{ tip === 5 ? <Button variant='contained' onClick={ () => handleTip( 5 ) } className='active'>5%</Button> : <Button variant='contained' onClick={ () => handleTip( 5 ) }>5%</Button> }
							{ tip === 10 ? <Button variant='contained' onClick={ () => handleTip( 10 ) } className='active'>10%</Button> : <Button variant='contained' onClick={ () => handleTip( 10 ) }>10%</Button> }
							{ tip === 15 ? <Button variant='contained' onClick={ () => handleTip( 15 ) } className='active'>15%</Button> : <Button variant='contained' onClick={ () => handleTip( 15 ) }>15%</Button> }
							{ tip === 25 ? <Button variant='contained' onClick={ () => handleTip( 25 ) } className='active'>25%</Button> : <Button variant='contained' onClick={ () => handleTip( 25 ) }>25%</Button> }
							{ tip === 50 ? <Button variant='contained' onClick={ () => handleTip( 50 ) } className='active'>50%</Button> : <Button variant='contained' onClick={ () => handleTip( 50 ) }>50%</Button> }
							<Input type='nummber' placeholder='Custom' onChange={ ( e ) => e.target.value > 0 ? setTip( e.target.value ) : setTip( 0 ) } />
						</Grid>

						<Grid item>
							<InputLabel htmlFor="input-with-icon-adornment">Number of People</InputLabel>
							<Input
								id="input-with-icon-adornment"
								onChange={ ( e ) => e.target.value > 0 ? setPeople( e.target.value ) : setPeople( 0 ) }
								value={ people > 0 ? people : '' }
								type='number'
								startAdornment={
									<InputAdornment position="start">
										<img src={iconPerson} alt='icon-person'/>
									</InputAdornment>
								}
							/>
						</Grid>

						<Grid item>
							<div>
								<p>Tip Amount<br/><span>/person</span></p>
								<p><strong>{tipAmount}</strong></p>
							</div>
							<div>
								<p>total<br/><span>/person</span></p>
								<p><strong>{total}</strong></p>
							</div>
							<Button variant='contained' onClick={ () => handleReset() }>RESET</Button>
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
