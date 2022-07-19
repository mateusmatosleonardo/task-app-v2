import React, { useState } from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Bell from '@expo/vector-icons/Feather';
import Me from '../../assets/me.jpg';
import Task from "../../components/Task";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ListRenderItemInfo } from 'react-native';
import { TaskProps } from "../../components/Task/types";

const Home: React.FC = ({ navigation }: any) => {

  return (
    <S.Container>
      <Header>
        <S.Profile>
          <S.TouchDrawer activeOpacity={1} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <S.PhotoProfile source={Me} resizeMode="contain" />
          </S.TouchDrawer>
        </S.Profile>
        <Bell name="bell" size={22} color={'#313030'} />

      </Header>
      <S.Title>
        Minhas tarefas
      </S.Title>
      {/* <S.ListTasks
        
      /> */}
    </S.Container>
  )
}

export default Home;