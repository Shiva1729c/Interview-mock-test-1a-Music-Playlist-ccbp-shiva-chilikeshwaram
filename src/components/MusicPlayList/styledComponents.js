import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

export const MusicPlaylistContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MusicPlaylistHeader = styled.div`
  height: 410px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
export const HeaderTextContainer = styled.div`
  width: 90%;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  color: #ffffff;
`

export const Profession = styled(Name)`
  font-weight: 400;
  font-size: 22px;
`
export const SongsHeadingAndSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`
export const SongsPlayListHeading = styled(Name)`
  font-size: 22px;
`
export const InputSearchContainer = styled.div`
  width: 170px;
  height: 20px;
  border: 1px solid #ffffff;
  padding-left: 10px;
  display: flex;
  border-radius: 3px;
`
export const InputElement = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 12px;
`
export const SearchIcon = styled(BsSearch)`
  width: 10px;
  color: #ffffff;
`
export const SongsPlayListContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  padding-left: 0px;
`
