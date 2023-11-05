import React, {useState} from 'react';
import { Formik } from 'formik';
import {View} from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';


import { 
    PageLogo, 
    InnerContainer,
    StyledContainers,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledTextInput,
    StyledInputLabel,
    RightIcon,
    StyledButton,
    ButtonText,
    newColors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLinkContent,
    TextLink,
    ImageContainer
} from '../styles/styles';


import { StatusBar } from 'expo-status-bar';

const {brand, darkLight, primary, blue} = newColors

const SignUp = () => {
    const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainers>
        <StatusBar style='dark'></StatusBar>
        <InnerContainer>
            <ImageContainer>
                <PageLogo source={require('../assets/images/camera.jpg')} style={{}}></PageLogo>
            </ImageContainer>
            
            <PageTitle>Age Estimator</PageTitle>
            <Subtitle>Account Login</Subtitle>

            <Formik
                initialValues={{email: '', password: '', username: '', phoneNo: '', fullName: ''}}
                onSubmit={(values) => {
                    async function postData(url = "", data = {}) {
                        try {
                            const response = await fetch(url, {
                                method: "POST",
                                mode: "cors",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data)
                            });
                    
                            if (!response.ok) {
                                throw new Error(response.status);
                            }
                    
                            const responseData = await response.json();
                            console.log(responseData);
                            return responseData;
                        } catch (error) {
                            console.log(error);
                            throw error; // You might want to handle or propagate the error accordingly
                        }
                    }

                    const request = postData('http://127.0.0.1:8000/api/v1.0/auth/signup/', {
                        "email":values.email,
                        "password": values.password,
                        "username": values.phoneNo,
                        "phone_number": values.phoneNo,
                        "name": values.fullName

                    });
                    console.log(request)
                }}
            >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                <MyTextInput 
                label="Full Name"
                icon="mail"
                placeholder="Andy Gareth"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                keyboardType="default"
                />
                <MyTextInput 
                label="Email Address"
                icon="mail"
                placeholder="andyg@hmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                />

                <MyTextInput 
                label="Username"
                icon="mail"
                placeholder="andyg"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('email')}
                value={values.username}
                keyboardType="default"
                />

                <MyTextInput 
                label="Phone Number"
                icon="mail"
                placeholder="07033993586"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('phoneNo')}
                onBlur={handleBlur('email')}
                value={values.phoneNo}
                keyboardType="default"
                />

                <MyTextInput
                label='Password'
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                keyboardType="default"
                secureTextEntry={hidePassword}
                isPassword={hidePassword}
                setHidePassword={setHidePassword}
                
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText >
                        Sign Up
                    </ButtonText>
                </StyledButton>
                <Line/> 
   
                <ExtraView>
                    <ExtraText>Dont have an account already?</ExtraText>
                    <TextLink>
                        <TextLinkContent>  Sign up</TextLinkContent>
                    </TextLink>  
                </ExtraView>

               
            </StyledFormArea>)}

            </Formik>

        
            
        </InnerContainer>

    </StyledContainers>
  )
}

// type Textfield = {
//     label : string,
//     icon: any,
//     isPassword: boolean,
//     hidePassword : boolean,
//     setHidePassword: (hidePassword: boolean) => boolean,
//     placeholder: string,
//     placeholderTextColor: string,
//     keyboardType: string,
//     onChangeText: ()=> void,
    
// }

const MyTextInput = ({label, icon, isPassword, hidePassword, ...props})=>{
    return(
        <View >
             <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>  
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             <StyledTextInput {...props}/>
             {isPassword && (
                <RightIcon>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} onPress={() => setHidePassword(!hidePassword)}></Ionicons>
                </RightIcon>
             )} 
        </View>
    )
}

export default SignUp