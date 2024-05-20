import React from 'react'; // Assuming icons
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Replace with your actual icon imports


function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size: number;
    style: object;
}) {
    return <FontAwesome {...props} />;
}
interface NavigationIconProps {
    route: string;
    isFocused: boolean;
}

const NavigationIcon: React.FC<NavigationIconProps> = ({ route, isFocused }) => {
    const color = isFocused ? 'white' : '#785050'; // Adjust colors as needed

    switch (route) {
        case 'home':
            return <TabBarIcon name="home" color={color} size={28} style={{ marginBottom: -3 }}/>;
        case 'articles/[article]':
            return <TabBarIcon name="book" color={color} size={26} style={{ marginBottom: -1 }}/>;
        default:
            return null; // Handle cases where route doesn't match any icon
    }
};

export default NavigationIcon;
