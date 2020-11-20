import AutoComplete from '../../components/AutoComplete';
import Container from '../../components/Container';
import './styles.scss'

const Home = () => {
    return (
       <div className="home-page-container">
           <img src="./googles-new-logo-5078286822539264.3-hp2x.gif" alt="Google" />
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
        </div>   
    )
}

export default Home
