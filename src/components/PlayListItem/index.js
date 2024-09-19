import {
  ListItem,
  SongLogo,
  SongName,
  SongGenre,
  SongDuration,
  DeleteIcon,
  SongNameAndGenreContainer,
  DeleteButton,
  SongDurationAndDeleteBtnContainer,
  ListItemDetailsContainer,
} from './styledComponents'

const PlayListItem = props => {
  const {songDetails, deleteItem} = props
  const {imageUrl, name, genre, duration, id} = songDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <ListItem>
      <SongLogo src={imageUrl} alt="track" />
      <ListItemDetailsContainer>
        <SongNameAndGenreContainer>
          <SongName>{name}</SongName>
          <SongGenre>{genre}</SongGenre>
        </SongNameAndGenreContainer>
        <SongDurationAndDeleteBtnContainer>
          <SongDuration>{duration}</SongDuration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onDeleteItem}
          >
            <DeleteIcon />
          </DeleteButton>
        </SongDurationAndDeleteBtnContainer>
      </ListItemDetailsContainer>
    </ListItem>
  )
}

export default PlayListItem
