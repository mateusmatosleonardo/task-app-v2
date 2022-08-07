import React from "react";
import { Platform } from "react-native";
import * as S from './styles';
import Header from "../../components/Header";
import Arrow from '@expo/vector-icons/Feather';
import Trash from '@expo/vector-icons/Feather';
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "./types";
import { Button } from "../../components/Button";
import { Theme } from "../../templates/theme";

const Details: React.FC = () => {
  const navigation = useNavigation();
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
        <S.TouchEvent activeOpacity={0.6} onPress={() => navigation.goBack()}>
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
      <S.Footer>
        <S.TouchDeleteTask activeOpacity={0.8}>
          <S.DeleteTask>
            EXCLUIR TAREFA
          </S.DeleteTask>
          <Trash name="trash" size={22} color='#FF4848' style={{ marginLeft: 12 }} />
        </S.TouchDeleteTask>
        <Button
          onPress={() => { }}
          style={{
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: '#18B29A',
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            marginTop: 8
          }}
          activeOpacity={1}
        >
          <S.CompleteTask>
            CONCLUIR TAREFA
          </S.CompleteTask>
        </Button>
      </S.Footer>
    </S.Container>
  )
}

export default Details;