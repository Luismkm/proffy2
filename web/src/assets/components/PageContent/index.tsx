import { timeLog } from 'console'
import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

interface Content {
    description: string;
    button: string;
    label: string;
    linkTo: string;
}

const PageContent:React.FC<Content> = ({ label,button, description, linkTo, children }) => {
    return(
       <>
       <main>
        <fieldset>  
        <legend>{ label }</legend>

          <div className="page-content">
            <p>{ description }</p>
            { children }
            <Link to={ linkTo }>
              <button>{ button }</button>  
            </Link>  
          </div>
          
        </fieldset>   
      </main>
       </>
    )
}

export default PageContent
