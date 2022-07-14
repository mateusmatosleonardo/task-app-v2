import React from "react";
import * as S from './styles';
import { TaskProps } from "./type";

const Task = ({title, creationDate}: TaskProps) => {
  return (
    <S.ContainerTask>
      <S.TitleTask>{title}</S.TitleTask>
      <S.CreationDate>{creationDate}</S.CreationDate>
    </S.ContainerTask>
  )
}

export default Task;