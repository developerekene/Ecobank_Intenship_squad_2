import React from 'react'
import '../../Components/search/Search.css'
function Search({Icon, placeholder}) {
  return (
    <div>
      <div className='search'>
        { Icon && <Icon />}
          <input type='text' placeholder={placeholder}></input>
      </div>

    </div>
  )
}

export default Search
