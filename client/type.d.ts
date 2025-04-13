// ~ INTERFACE EXAMPLES ~
/*
declare interface MapProps {
	destinationLatitude?: number;
	destinationLongitude?: number;
	onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
	selectedDriver?: number | null;
	onMapReady?: () => void;
	fullName: string | null | undefined;
}
*/

// ~ STORE EXAMPLES ~
/*
declare interface LocationStore {
	userLatitude: number | null;
	setDestinationLocation: ({
		latitude,
		longitude,
		address,
	}: {
		latitude: number;
		longitude: number;
		address: string;
	}) => void;
	setDrivers: (drivers: MarkerData[]) => void;
}
*/

// NativeWind type for className props
type NativeWindStyleProp = string;
// ~ STYLING EXAMPLES ~
/*
declare interface InputFieldProps extends TextInputProps {
	label: string;
	icon?: any;
	secureTextEntry?: boolean;
	labelStyle?: NativeWindStyleProp; // NativeWind class names for label styling
	containerStyle?: NativeWindStyleProp; // NativeWind class names for container styling
	inputStyle?: NativeWindStyleProp; // NativeWind class names for input styling
	iconStyle?: NativeWindStyleProp; // NativeWind class names for icon styling
	className?: NativeWindStyleProp; // NativeWind class names for component styling
}
*/

/** NativeWind class names for styling */
/*
declare interface ButtonProps extends TouchableOpacityProps {
	title: string;
	bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success';
	textVariant?: 'primary' | 'default' | 'secondary' | 'danger' | 'success';
	IconLeft?: React.ComponentType<any>;
	IconRight?: React.ComponentType<any>;
	className?: NativeWindStyleProp;
}
*/
