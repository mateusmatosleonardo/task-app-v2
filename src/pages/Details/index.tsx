import React from "react";
import * as S from './styles';
import Header from "../../components/Header";
import Arrow from '@expo/vector-icons/Feather';

const Details: React.FC = () => {
  return (
    <S.Container>
      <Header style={{
        paddingStart: 20, 
        paddingEnd: 20,
        paddingVertical: 30,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
        }}>
        <Arrow name="arrow-left" size={32} color={'#000'}/>
        <S.Title>Detalhes</S.Title>
        <S.InvibleView />
      </Header> 
      <S.ViewTask>
        <S.TitleTask>Aprender Fluxos UI</S.TitleTask>
        <S.ContentTask>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quia ducimus fugit temporibus eos nihil a repellendus corrupti asperiores officiis numquam vitae voluptatem, ipsa placeat quaerat facilis perspiciatis tenetur alias?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem repudiandae fugit fugiat voluptatum molestiae, earum sequi, possimus amet laborum quas saepe? Ut ratione, pariatur quo doloribus enim accusamus libero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quia, consequatur, expedita reiciendis laboriosam nostrum ea amet officiis ratione temporibus sequi mollitia adipisci error necessitatibus doloremque distinctio molestiae quibusdam sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perferendis in mollitia distinctio est exercitationem, porro accusantium possimus architecto dignissimos itaque reprehenderit minima, maxime voluptatibus beatae voluptates ea, dolores accusamus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati odit unde officiis omnis possimus vel eaque exercitationem doloribus necessitatibus ipsum, est optio eligendi, provident ut. Deserunt saepe placeat qui?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum tempore magni, consequuntur ut nisi. Quisquam facere quam reiciendis, illum minima consequatur totam ullam, eius rem voluptate assumenda. Eligendi, delectus?
        </S.ContentTask>
      </S.ViewTask> 
    </S.Container>
  )
}

export default Details;