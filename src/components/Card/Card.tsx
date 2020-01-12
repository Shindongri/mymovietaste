import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``

const ImageContainer = styled.div`
    width: 100%;
`

const Image = styled.img`
    width: 100%;
`

const Rate = styled.span``

const Title = styled.div``

const Year = styled.div``

export interface IProps {
    id: number;
    title: string;
    releaseDate: string;
    posterPath: string;
}

const Card: React.FC<IProps> = ({ id, title, releaseDate, posterPath }) => {
    return (
        <Link to={`/movie/${ id }`}>
            <Container>
                <ImageContainer>
                    <Image src={ `${ process.env.REACT_APP_IMAGE_PREFIX }${ posterPath }` } />
                    <Rate />
                </ImageContainer>
                <Title>{ title }</Title>
                <Year>{ releaseDate }</Year>
            </Container>
        </Link>
    )
}

export default Card
