import './pokemon-list.css'
import React, { PropTypes } from 'react'

import PokemonRow from './pokemon-row-component'
import PokemonFilter from './pokemon-list-filter'

let List = ({list}) => {
  return <div className='list'>
    <h4 className='title'>Pokemon</h4>
    <PokemonFilter />
    <div className='list-container'>
      <ul>
        <PokemonRow />
      </ul>
    </div>
  </div>
}

List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List
