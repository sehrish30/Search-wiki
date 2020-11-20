import ReactAutocomplete from "react-autocomplete";
import Input from "../Input";
import './styles.scss'

const AutoComplete = ({ articles, onSearchChange, searchValue}) => (
      <ReactAutocomplete
          className="autocomplete"
          items={articles}
          renderInput={Input}
          inputProps={{placeholder: 'Input a search term '}}
          getItemValue={item => item.label}
          renderMenu={(children, value, style) => {
              return articles && articles.length ?
                  (<div style={{...style}} className="input-suggestions">
                          {children}
                          <a href={`/search?query=${value}`} className="search-link">
                              See all results
                          </a>
                      </div>
                  ) : <></>;
          }}
          renderItem={(item, highlighted) =>
              <div
                  className="input-suggestions-item"
                  key={item.id}
                  style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                  {item.label}
              </div>
          }
          value={searchValue}
          onChange={onSearchChange}
      />
  );
export default AutoComplete;
