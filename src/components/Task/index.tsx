import React from "react";
import * as S from './styles';
import { Props } from "./types";

const Task = ({ data, action }: Props) => {
  return (
    <S.TouchNavigation activeOpacity={0.8} onPress={action}>
      <S.ContainerTask>
        <S.TitleTask>{data.title}</S.TitleTask>
        <S.CreationDate>{data.creationDate}</S.CreationDate>
      </S.ContainerTask>
    </S.TouchNavigation>
  )
}

export default Task;