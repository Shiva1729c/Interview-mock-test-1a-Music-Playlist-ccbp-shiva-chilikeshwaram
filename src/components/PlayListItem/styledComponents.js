import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  //   border: 1px solid red;
`

export const SongLogo = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 10px;
`
export const SongNameAndGenreContainer = styled.div`
  //   border: 1px solid green;
`
export const SongName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
`

export const SongGenre = styled(SongName)`
  font-weight: 400;
  color: #3b82f6;
`

export const ListItemDetailsContainer = styled.div`
  //   border: 1px solid red;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 5px;
`

export const SongDurationAndDeleteBtnContainer = styled.div`
  //   border: 1px solid orange;
  display: flex;
  align-items: center;
`

export const SongDuration = styled(SongGenre)`
  color: #ffffff;
  margin-right: 30px;
`

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`

export const DeleteIcon = styled(AiOutlineDelete)`
  color: #ffffff;
  width: 16px;
  height: 16px;
`
