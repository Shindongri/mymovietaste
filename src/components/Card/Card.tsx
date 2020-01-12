import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #666666;
`

const Container = styled.div`
`

const Image = styled.img`
    width: 100%;
`

const Rating = styled.span`
    font-size: 12px;
    position: absolute;
    color: #ffffff;
    right: 4px;
    bottom: 4px;
    opacity: 0;
`

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    &:hover {
        ${ Image } {
            opacity: 0.3;
        }
        ${ Rating } {
            opacity: 1;
        }
    }
`

const Title = styled.div`
    margin-top: 4px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; 
`

const Year = styled.small`
    font-size: 12px;
`

export interface IProps {
    id: number;
    title: string;
    year: string;
    posterPath: string;
    voteAverage: number;
    isMovie?: boolean;
}

const Card: React.FC<IProps> = ({ id, title, year, posterPath, voteAverage, isMovie }) => {
    return (
        <StyledLink to={ isMovie ? `/movie/${ id }` : `/tv/${ id }` }>
            <Container>
                <ImageContainer>
                    <Image src={ `${ process.env.REACT_APP_IMAGE_PREFIX }${ posterPath }` } />
                    <Rating>
                        <span role="img" aria-label="rating">★</span>{' '}
                        { voteAverage } / 10</Rating>
                </ImageContainer>
                <Title>{ title }</Title>
                <Year>{ year }</Year>
            </Container>
        </StyledLink>
    )
}

export default Card
