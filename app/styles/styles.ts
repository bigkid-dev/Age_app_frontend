import styled from 'styled-components/native';
import { View, Text, Image, TouchableOpacity  } from "react-native"; 
import  Constants  from "expo-constants";

export const newColors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#62D28D",
    green: '#10B981',
    red: '#EF44444',
    blue: '#3F78E0'
}

const StatusBarHeight = Constants.statusBarHeight;

const {primary, secondary, tertiary, darkLight, brand, green, red, blue} = newColors

export const StyledContainers = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;


export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`;
export const ImageContainer = styled.View`
    
    
`;

export const PageLogo = styled.Image`
    
    
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-left: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary}; 
` 

export const StyledInputLabel = styled.Text`
        color: ${tertiary};
        font-size: 13px;
        text-align:  left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;

`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
    
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${blue};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;  


`;


export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;


`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;

`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;

`;


export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;

`;

export const TextLink = styled.View`
    justify-content: center;
    align-items: center;

`;

export const TextLinkContent = styled.Text`
    color: ${brand};

`