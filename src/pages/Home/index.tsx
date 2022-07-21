import React, { useState } from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Bell from '@expo/vector-icons/Feather';
import Me from '../../assets/me.jpg';
import Task from "../../components/Task";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TaskProps } from "../../components/Task/types";
import { FlatList, ListRenderItem } from "react-native";

const Home: React.FC = ({ navigation }: any) => {

  const navigator = useNavigation();

  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: '1',
      title: 'Estudar ...',
      description: 'lorem ...',
      creationDate: '2d'
    }
  ]);


  function handleOpenDetails(item: TaskProps) {
    navigator.navigate('Details', { ...item })
  }

  const renderItem:
    ListRenderItem<TaskProps> =
    ({ item }) => <Task data={item} action={() => handleOpenDetails(item)} />;

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
      <FlatList
        contentContainerStyle={{ marginTop: 20 }}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </S.Container>
  )
}

export default Home;