import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "Jab Koi Baat Bigad Jaye", duration: "4:00", movie: "Jurm"},
    { title: "Mera Dil Bhi Kitna Pagal Hai", duration: "3:55", movie: "Saajan"},
    { title: "Mein Koi Aisa Geet Gaoon", duration: "2:30", movie: "Yes Boss"},
    { title: "Do Dil Mil Rahe Hain", duration: "5:40", movie: "Pardes"},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
