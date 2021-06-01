import React, { Component, useState, useEffect } from "react";

/* class Hooks extends Component {
    state = {
        nilai: 5
    }

    handleButton = () => {
        this.setState({
            nilai: this.state.nilai + 1
        })
    }

    componentDidMount(){
        document.title = this.state.nilai
    }

    componentDidUpdate(){
        document.title = this.state.nilai
    }

    componentWillUnmount(){
        document.title = "belajar react js"
    }
    render() {
        return (
            <div>
                <p>Nilai Saya saat ini adalah : {this.state.nilai}</p>
                <button onClick={this.handleButton}>Update Nilai</button>
            </div>
        )
    }
} */

const Hooks = () => {
  const [nilai, setNilai] = useState(5);
  useEffect(() => {
    document.title = nilai;
    return () => {
      document.title = "belajar react js";
    };
  });
  return (
    <div>
      <p>Nilai Saya saat ini adalah : {nilai}</p>
      <button onClick={() => setNilai(nilai + 1)}>Update Nilai</button>
    </div>
  );
};

export default Hooks;
