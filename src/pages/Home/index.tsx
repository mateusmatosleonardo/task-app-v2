import React, { useContext, useEffect, useState } from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Bell from '@expo/vector-icons/Feather';
import Me from '../../assets/me.jpg';
import Task from "../../components/Task";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TaskProps } from "../../components/Task/types";
import { FlatList, ListRenderItem } from "react-native";
import { TaskContext } from "../../providers/taskProvider";

const Home: React.FC = ({ navigation }: any) => {

  const [isLoading, setIsLoading] = useState(false);

  const { tasks, getAllTasks } = useContext(TaskContext);

  const navigator = useNavigation();

  function handleOpenDetails(item: TaskProps) {
    navigator.navigate('Details', { ...item })
  }

  const renderItem:
    ListRenderItem<TaskProps> =
    ({ item }) => <Task data={item} action={() => handleOpenDetails(item)} />;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getAllTasks();
      setIsLoading(false);
    }, 2000);
  }, []);

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
      {
        isLoading ? <S.Loading size="large" /> : <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          contentContainerStyle={{ marginTop: 20, paddingBottom: 25 }}
          data={tasks}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
        />


      }

    </S.Container>
  )
}

export default Home;