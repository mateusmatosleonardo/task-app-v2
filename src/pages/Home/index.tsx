import React from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Bell from '@expo/vector-icons/Feather';
import Me from '../../assets/me.jpg';
import Task from "../../components/Task";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header>
        <S.Profile>
          <S.PhotoProfile source={Me} resizeMode="contain" />
        </S.Profile>
        <Bell name="bell" size={22} color={'#313030'}/>
      </Header>
      <S.Title>
        Minhas tarefas
      </S.Title>
      <Task title="Aprender fluxos UI" creationDate="2d"/>
    </S.Container>
  )
}

export default Home;