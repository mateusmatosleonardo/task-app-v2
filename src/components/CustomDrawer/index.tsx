import React from "react";
import * as S from './styles';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Me from '../../assets/me.jpg';

const CustomDrawer = (props: any) => {
  return (
    <S.ContainerDrawer>
      <DrawerContentScrollView {...props}>
        <S.ContainerInformation>
          <S.PhotoProfile source={Me} />
          <S.Name>Mateus</S.Name>
          <S.NumberOfTasks>22 tarefas</S.NumberOfTasks>
        </S.ContainerInformation>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </S.ContainerDrawer>
  )
}

export default CustomDrawer;