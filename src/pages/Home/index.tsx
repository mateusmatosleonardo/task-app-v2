import React from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Bell from '@expo/vector-icons/Feather';
import Me from '../../assets/me.jpg';
import Task from "../../components/Task";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { tasks } from "../../mocks/tasks";
import { ListRenderItemInfo } from 'react-native';
import { TaskProps } from "../../components/Task/types";
import { HomeScreenProps } from "./types";

const Home: React.FC = ({navigation}: any) => {

  const navigator = useNavigation<HomeScreenProps>();

  navigation.dispatch(DrawerActions.openDrawer());

  function renderItem({item}: ListRenderItemInfo<TaskProps>){
    return <Task {...item} onPress={() => navigator.navigate('Details')}/>
  }

  return (
    <S.Container>
      <Header>
        <S.Profile>
          <S.TouchDrawer activeOpacity={1} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <S.PhotoProfile source={Me} resizeMode="contain" />
          </S.TouchDrawer>
        </S.Profile>
        <Bell name="bell" size={22} color={'#313030'}/>
      </Header>
      <S.Title>
        Minhas tarefas
      </S.Title>
      <S.ListTasks
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        data={tasks} 
        keyExtractor={(item: any) => item.title}
        renderItem={renderItem}
      />
    </S.Container>
  )
}

export default Home;