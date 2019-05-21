// Song list reducer
export const songListReducer = () => {
    return [
        { title: 'I Want You', duration: '4:05' },
        { title: 'Homecoming', duration: '3:25' },
        { title: 'Baby Boy', duration: '2:55' },
        { title: 'Killing Me Softly', duration: '4:30' },
        { title: 'I want you', duration: '3:00' },
    ];
};

// Selected song reducer
export const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};