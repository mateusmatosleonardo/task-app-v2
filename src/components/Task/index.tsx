import React from "react";
import * as S from './styles';
import { TaskProps } from "./types";

const Task = ({title, creationDate, onPress}: TaskProps) => {
  return (
    <S.TouchNavigation activeOpacity={0.8} onPress={onPress}>
      <S.ContainerTask>
        <S.TitleTask>{title}</S.TitleTask>
        <S.CreationDate>{creationDate}</S.CreationDate>
      </S.ContainerTask>
    </S.TouchNavigation>
  )
}

export default Task;