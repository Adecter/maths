import React from 'react'
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';

export default function About() {
  return (
    <div className='about'>
      <p>
          <FormattedMessage
              id = "app.header"
              defaultMessage="Edit the files and save to reload"
              values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id = "app.content"
            defaultMessage="Learn React"
          />

        </a>
        <FormattedMessage
          id = "app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
          values = {{blogName: "Lokalise"}}
        />
        <br/>
        <FormattedPlural
            id = "app.plural"
            defaultMessage="{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong fromat}}"
            values = {{amount: 90}}
        />
    </div>
  )
}
