import React from 'react'
import './styles.scss'


import {
    useLocation
  } from "react-router-dom";
import { useSearch } from '../../hooks';
import Container from '../../components/Container';
import AutoComplete from '../../components/AutoComplete';
import ListItem from '../../components/ListItem';

const Page = () => {

    let location = useLocation();
    
    // URLSearchParams web api only parses parameter ?query=abc not links
    const parsedLocation = new URLSearchParams(location.search)
    const query = parsedLocation.get('query')
    const {articles, status} = useSearch(query, 50)
    // console.log(location)
    return (
        <div>
            <Container>
                {
                ({searchValue, onSearchChange, articles}) =>
                <AutoComplete
                articles={articles}
                onSearchChange={onSearchChange} 
                searchValue={searchValue}
                />
                }
            </Container>
            {!articles.length && status === "SUCCESS"
            ? <h1>No articles for this query: <span className="nothing">{query}</span></h1>
            : articles.map(article => <ListItem {...article} key={article.id}/>
             )}
        </div>
    )
}

export default Page
