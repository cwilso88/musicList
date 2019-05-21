import React from 'react'
import { connect } from 'net';

const SongDetail = () => {
    return (
        <div>
            Song Detail
        </div>
    )
}

const mapStateToProps = (state) => {
    { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
