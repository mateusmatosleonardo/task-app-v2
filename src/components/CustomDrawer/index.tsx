import React, { useContext } from "react";
import * as S from './styles';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Me from '../../assets/me.jpg';
import { TaskContext } from "../../providers/taskProvider";

const CustomDrawer = (props: any) => {

  const { tasks } = useContext(TaskContext);

  return (
    <S.ContainerDrawer>
      <DrawerContentScrollView {...props}>
        <S.ContainerInformation>
          <S.PhotoProfile source={Me} />
          <S.Name>Mateus</S.Name>
          <S.NumberOfTasks>{tasks.length} {tasks.length <= 1 ? 'tarefa' : 'tarefas'}</S.NumberOfTasks>
        </S.ContainerInformation>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </S.ContainerDrawer>
  )
}

export default CustomDrawer;