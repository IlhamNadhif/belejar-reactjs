import React, { Component, Fragment } from 'react'
import YouTubeComp from "../../../component/YoutubeComp/YouTubeComp"

class YouTubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <YouTubeComp
                time="4.45"
                title="judul 1"
                desc="Ini cuma deskripsi 1"
              />
              <YouTubeComp
                time="7.45"
                title="judul 2"
                desc="Ini cuma deskripsi 2"
              />
              <YouTubeComp
                time="5.35"
                title="judul 3"
                desc="Ini cuma deskripsi 3"
              />
              <YouTubeComp />
            </Fragment>
        )
    }
}

export default YouTubeCompPage
