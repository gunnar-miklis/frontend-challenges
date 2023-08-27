import { useEffect, useState } from 'react';
import { styleGuide } from './styleGuide';
import iconDollar from './assets/icon-dollar.svg';
import iconPerson from './assets/icon-person.svg';
import CheckIcon from '@mui/icons-material/Check';
import CommonButton from './components/common/CommonButton/CommonButton';
import {
	Alert,
	Container,
	FilledInput,
	Grid,
	InputAdornment,
	InputLabel,
	Paper,
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

	// NOTE: Calculation
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
		<Container maxWidth='md' disableGutters>

			<Grid container direction='column' wrap='nowrap' rowSpacing={4}>

				{/* NOTE: title */}
				<Grid item xs={4}>
					<Typography variant='h2'>Spli<br/>tter</Typography>
				</Grid>

				{/* NOTE: paper/card component */}
				<Grid item xs={8}>
					<Paper elevation={5}>
						<Grid container direction='row' wrap='wrap' spacing={5}>

							{/* NOTE: input section (left/upper) */}
							<Grid item xs={12} sm={12} md={6}>

								{/* NOTE: input field: bill */}
								<Grid container direction='column' justifyContent='space-between' rowSpacing={4}>
									<Grid item xs={12}>
										<InputLabel htmlFor="bill">Bill</InputLabel>
										<FilledInput
											id='bill'
											type='number'
											disableUnderline
											fullWidth
											value={ bill > 0 ? bill : '' }
											onChange={ ( e ) => e.target.value > 0 ? setBill( Number( e.target.value ) ) : setBill( 0 ) }
											placeholder='0'
											startAdornment={
												<InputAdornment position="start">
													<img src={iconDollar} alt='icon-dollar'/>
												</InputAdornment>
											}
										/>
									</Grid>

									{/* NOTE: selection: tip */}
									<Grid item xs={12}>
										<InputLabel>Select Tip %</InputLabel>
										<Grid container direction='row' wrap='wrap' columnSpacing={2} justifyContent='space-between'>
											<Grid item xs={6} sm={4}>
												{
													tip === 5 ?
														<CommonButton title='5%' onClick={ () => handleTip( 5 ) } isActive/> :
														<CommonButton title='5%' onClick={ () => handleTip( 5 ) } />
												}
											</Grid>
											<Grid item xs={6} sm={4}>
												{
													tip === 10 ?
														<CommonButton title='10%' onClick={ () => handleTip( 10 ) } isActive/> :
														<CommonButton title='10%' onClick={ () => handleTip( 10 ) } />
												}
											</Grid>
											<Grid item xs={6} sm={4}>
												{
													tip === 15 ?
														<CommonButton title='15%' onClick={ () => handleTip( 15 ) } isActive/> :
														<CommonButton title='15%' onClick={ () => handleTip( 15 ) } />
												}
											</Grid>
											<Grid item xs={6} sm={4}>
												{
													tip === 25 ?
														<CommonButton title='25%' onClick={ () => handleTip( 25 ) } isActive/> :
														<CommonButton title='25%' onClick={ () => handleTip( 25 ) } />
												}
											</Grid>
											<Grid item xs={6} sm={4}>
												{
													tip === 50 ?
														<CommonButton title='50%' onClick={ () => handleTip( 50 ) } isActive/> :
														<CommonButton title='50%' onClick={ () => handleTip( 50 ) } />
												}
											</Grid>
											<Grid item xs={6} sm={4}>
												<FilledInput
													type='nummber'
													disableUnderline
													fullWidth
													placeholder='Custom'
													onChange={ ( e ) => e.target.value > 0 ? setTip( Number( e.target.value ) ) : setTip( 0 ) }
													inputProps={{
														style: {
															textAlign: 'center',
														},
													}}
												/>
											</Grid>
										</Grid>
									</Grid>

									{/* NOTE: input field: number of people */}
									<Grid item xs={12}>
										<InputLabel htmlFor="number-of-people">Number of People</InputLabel>
										<FilledInput
											type='number'
											disableUnderline
											fullWidth
											id="number-of-people"
											value={ people > 0 ? people : '' }
											onChange={ ( e ) => e.target.value > 0 ? setPeople( Number( e.target.value ) ) : setPeople( 0 ) }
											placeholder='0'
											startAdornment={
												<InputAdornment position="start">
													<img src={iconPerson} alt='icon-person'/>
												</InputAdornment>
											}
										/>
									</Grid>

								</Grid>

							</Grid>

							{/* NOTE: result section (right/lower) */}
							<Grid item xs={12} sm={12} md={6}>

								<Grid
									container
									direction='column'
									wrap='nowrap'
									rowSpacing={4}
									mt={0}
									sx={{
										backgroundColor: styleGuide.colors.darkCyan,
										color: styleGuide.colors.lightGrayishCyan,
										padding: '35px',
										borderRadius: '20px',
										height: '100%',
									}}>

									{/* NOTE: result: tip amount */}
									<Grid item xs={2}>
										<Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'>
											<Grid item>
												<Typography variant='body1'>Tip Amount</Typography>
												<Typography variant='body2'>/ person</Typography>
											</Grid>
											<Grid item>
												<Typography variant='h3'>${tipAmount}</Typography>
											</Grid>
										</Grid>
									</Grid>

									{/* NOTE: result: total */}
									<Grid item xs={8}>
										<Grid container justifyContent='space-between'alignItems='center' wrap='nowrap'>
											<Grid item>
												<Typography variant='body1'>Total</Typography>
												<Typography variant='body2'>/ person</Typography>
											</Grid>
											<Grid item>
												<Typography variant='h3'>${total}</Typography>
											</Grid>
										</Grid>
									</Grid>

									{/* NOTE: result: reset button */}
									<Grid item xs={2}>
										{
											bill || tip || people ?
												<CommonButton title='Reset' isActive onClick={ () => handleReset() } /> :
												<CommonButton title='Reset' isActive onClick={ () => handleReset() } disabled />
										}
									</Grid>

								</Grid>

							</Grid>
						</Grid>


					</Paper>
				</Grid>

			</Grid>


			{/* NOTE: snackbar */}
			<Snackbar
				open={showSnackbar}
				autoHideDuration={6000}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				onClose={handleCloseSnackbar}>
				<Alert
					onClose={handleCloseSnackbar}
					severity="success"
					icon={
						<CheckIcon sx={{ color: styleGuide.colors.main }}/>
					}
				>
							Reset Successful
				</Alert>
			</Snackbar>


		</Container>
	);
}
