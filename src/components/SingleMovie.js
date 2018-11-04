import React, { Component } from 'react';
import Movie from './Movie';
import {Link} from 'react-router-dom';


export default class SingleMovie extends Component {

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.name.value);
        console.log(event.target.comment.value);
        

    }

    render() {
        // let film = this.props.location.state;
        // console.log(film);
        // let {naziv, godina, slika, _id} = this.props.location.state

        return (
            // <Grid>
            //     <Row className="show-grid">
            //         <div className='singleMovieHolder'></div>
            //         <Col sm={12}>
            //             <h1>{naziv}</h1>
            //             <Image src={slika} thumbnail />
            //             <h2>{godina}</h2>
            //         </Col>
            //     </Row>
            // </Grid>
            <>
            <Link to="/">&lt; back</Link>
            <h1>Single Movie</h1>
            <Movie podaci={this.props.location.state}/>

            <form onSubmit={this.handleSubmit}>
            <label>Ime: </label><br/>
                <input name="name"/><br/>
            <label>Komentar: </label><br/>
                <textarea name="comment"></textarea>
                <input type="submit" value="Posalji"/>
                </form>
            </>
        )
    }
}