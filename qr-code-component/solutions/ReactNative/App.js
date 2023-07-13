import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';
import imageQR from './assets/image-qr-code.png';

export default function App() {
	const [fontsLoaded] = useFonts({
		Outfit_400Regular,
		Outfit_700Bold,
	})

	if ( !fontsLoaded ) return null;
	return (
		<View style={styles.container}>

		<View></View>

		<View style={styles.card}>
			<View>
				<Image source={imageQR} style={styles.image} resizeMode='contain'/>
			</View>
			
			<View>
				<Text style={styles.title} selectable={true} selectionColor='hsl(212, 45%, 89%)'>Improve your front-end skills by building projects</Text>
				<Text style={styles.paragraph} selectable={true} selectionColor='hsl(212, 45%, 89%)'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Text>
			</View>
		</View>

		<View style={styles.footer}>
			
			<View style={styles.linkWrapper}>
				<Text style={styles.muted}>Challenge by </Text>
				<TouchableOpacity>
					<Text style={styles.link} onPress={ () => Linking.openURL('https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H') }>
						Frontend Mentor
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.linkWrapper}>
				<Text style={styles.muted}>Coded by </Text>
				<TouchableOpacity>
					<Text style={styles.link} onPress={ () => Linking.openURL('https://flowcv.me/gunnar-miklis') }>
						Gunnar Miklis
					</Text>
				</TouchableOpacity>
			</View>
		</View>

		<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'hsl(212, 45%, 89%)',
	},
	card: {
		width: 300,
		padding: 15,
		borderRadius: 15,
		backgroundColor: 'hsl(0, 0%, 100%)',
		
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 5,  
		elevation: 5,
	},
	image: {
		width: '100%',
		height: undefined,
		aspectRatio: 1,
		borderRadius: 15,
	},
	title: {
		fontFamily: 'Outfit_700Bold',
		fontSize: 20,
		color: 'hsl(218, 44%, 22%)',
		textAlign: 'center',
		margin: 10,
		marginTop: 15,
		marginBottom: 10,

	},
	paragraph: {
		fontFamily: 'Outfit_400Regular',
		fontSize: 15,
		color: 'hsl(220, 15%, 55%)',
		textAlign: 'center',
		margin: 10,
		marginBottom: 15,
	},
	footer: {
		paddingBottom: 15,
	},
	linkWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	link: {
		textDecorationLine: 'underline',
		fontFamily: 'Outfit_400Regular',
		fontSize: 12,
		paddingBottom: 5,
	},
	muted: {
		fontFamily: 'Outfit_400Regular',
		fontSize: 12,
		color: 'hsl(220, 15%, 55%)',
		paddingBottom: 5,
	},
});
