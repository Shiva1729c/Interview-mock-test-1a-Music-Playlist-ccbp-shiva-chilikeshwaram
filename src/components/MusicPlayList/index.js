import {Component} from 'react'
import PlayListItem from '../PlayListItem'
import {
  MusicPlaylistContainer,
  MusicPlaylistHeader,
  HeaderTextContainer,
  Name,
  Profession,
  SongsHeadingAndSearchContainer,
  SongsPlayListHeading,
  InputSearchContainer,
  InputElement,
  SearchIcon,
  SongsPlayListContainer,
} from './styledComponents'

class MusicPlayList extends Component {
  state = {
    searchInput: '',
    trackList: [],
  }

  componentDidMount() {
    const {initialTracksList} = this.props
    this.setState({trackList: initialTracksList})
  }

  deleteItem = id => {
    const {trackList} = this.state
    const updatedTrackList = trackList.filter(eachTrack => eachTrack.id !== id)
    this.setState({trackList: updatedTrackList})
  }

  renderHeader = () => (
    <MusicPlaylistHeader>
      <HeaderTextContainer>
        <Name>Ed Sheeran</Name>
        <Profession as="p">Singer</Profession>
      </HeaderTextContainer>
    </MusicPlaylistHeader>
  )

  inputSearchResults = () => {
    const {searchInput, trackList} = this.state

    const SearchResults = trackList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.trim().toLowerCase()),
    )
    return SearchResults
  }

  renderSongsPlayList = () => {
    const searchResult = this.inputSearchResults()
    return (
      <SongsPlayListContainer>
        {searchResult.map(eachTrack => (
          <PlayListItem
            songDetails={eachTrack}
            key={eachTrack.id}
            deleteItem={this.deleteItem}
          />
        ))}
      </SongsPlayListContainer>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderInputSearch = () => {
    const {searchInput} = this.state
    return (
      <InputSearchContainer>
        <InputElement
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <SearchIcon />
      </InputSearchContainer>
    )
  }

  render() {
    const searchResult = this.inputSearchResults()
    const emptyListView = searchResult.length === 0

    return (
      <MusicPlaylistContainer>
        {this.renderHeader()}
        <SongsHeadingAndSearchContainer>
          <SongsPlayListHeading>Songs PlayList</SongsPlayListHeading>
          {this.renderInputSearch()}
        </SongsHeadingAndSearchContainer>
        {!emptyListView ? (
          this.renderSongsPlayList()
        ) : (
          <Name as="p">No Songs Found</Name>
        )}
      </MusicPlaylistContainer>
    )
  }
}

export default MusicPlayList
