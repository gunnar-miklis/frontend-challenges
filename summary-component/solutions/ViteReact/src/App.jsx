import './App.css';
import icoReaction from './assets/images/icon-reaction.svg';
import icoMemory from './assets/images/icon-memory.svg';
import icoVerbal from './assets/images/icon-verbal.svg';
import icoVisual from './assets/images/icon-visual.svg';

function App() {
  return (
    <>

		<div className='component'>

			<section className='result f-col'>
				<h4>Your Result</h4>

				<div className='score f-col'>
					<p><span>76</span><br/>of 100</p>
				</div>

				<h2>Great</h2>
				<p>You scored higher than 65% of the people who have taken these tests.</p>
			</section>

			<section className='summary f-col'>
				<h3>Summary</h3>

				<div className='box f-row bg-red'>
					<div className='f-row'>
						<img src={icoReaction} alt='icon-reaction'/>
						<p>Reaction</p>
					</div>
					<p><span>80</span> / 100</p>
				</div>
				<div className='box f-row bg-yellow'>
					<div className='f-row'>
						<img src={icoMemory} alt='icon-memory'/>
						<p>Memory</p>
					</div>
					<p><span>92</span> / 100</p>
				</div>
				<div className='box f-row bg-teal'>
					<div className='f-row'>
						<img src={icoVerbal} alt='icon-verbal'/>
						<p>Verbal</p>
					</div>
					<p><span>61</span> / 100</p>
				</div>
				<div className='box f-row bg-blue'>
					<div className='f-row'>
						<img src={icoVisual} alt='icon-visual'/>
						<p>Visual</p>
					</div>
					<p><span>72</span> / 100</p>
				</div>

				<button>Continue</button>
			</section>

		</div>

		<footer>
			<p>
				Challenge by <a href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV" target="_blank">Frontend Mentor</a>
				<br />
				Coded by <a href="https://flowcv.me/gunnar-miklis">Gunnar Miklis</a>
			</p>
		</footer>

    </>
  )
};

export default App;
