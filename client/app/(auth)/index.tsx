import { useSignIn } from '@clerk/clerk-expo';
import { ThemedText } from '@components/ThemedText';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

const SignInScreen = () => {
	const { signIn, setActive, isLoaded } = useSignIn();
	const router = useRouter();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [isSigningIn, setIsSigningIn] = useState(true);

	return (
		<View>
			<ThemedText type='title'>SignIn Screen</ThemedText>
			<Link href='/sign-up'>Go to Sign Up</Link>
		</View>
	);
};

export default SignInScreen;
