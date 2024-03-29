import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    padding-top: ${Platform.OS === 'ios' ? 50 : 30}px;
    padding-start: 20px;
    padding-end: 20px
    background-color: ${theme.colors.primary};
  `}
`;

export const TouchDrawer = styled.TouchableOpacity`
  
`;

export const Profile = styled.View`
  width: 60px;
  height: 60px;
`;

export const PhotoProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.black};
    font-size: ${RFValue(21)}px;
    margin-top: ${RFValue(21)}px;
  `};
`;

export const ListTasks = styled.FlatList`
  margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator`
  ${({theme}) => css`
    color: ${theme.colors.black};
    margin-top: ${RFValue(20)}px;
  `};
`;