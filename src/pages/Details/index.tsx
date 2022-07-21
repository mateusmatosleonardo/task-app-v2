import React from "react";
import { Platform } from "react-native";
import * as S from './styles';
import Header from "../../components/Header";
import Arrow from '@expo/vector-icons/Feather';
import { useRoute } from "@react-navigation/native";
import { RouteParams } from "./types";

const Details: React.FC = () => {

  const routes = useRoute();
  const { title, description } = routes.params as RouteParams;

  return (
    <S.Container>
      <Header style={{
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: Platform.OS === 'ios' ? 40 : 30,
        paddingBottom: Platform.OS === 'ios' ? 20 : 20,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      }}>
        <S.TouchEvent activeOpacity={0.6}>
          <Arrow name="arrow-left" size={32} color={'#000'} />
        </S.TouchEvent>
        <S.Title>Detalhes</S.Title>
        <S.InvibleView />
      </Header>
      <S.ViewTask showsVerticalScrollIndicator={false}>
        <S.TitleTask>{title}</S.TitleTask>
        <S.ContentTask>
          {description}
        </S.ContentTask>
      </S.ViewTask>
    </S.Container>
  )
}

export default Details;