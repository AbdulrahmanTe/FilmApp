import React from 'react'
import {ShowCard} from '../';

export default function SearchedShows({showData}) {
  return (
    <>
        { showData.filter(s => s.image ? true : false).map(s => <ShowCard key={s.id} show={s} />)}
    </>
  )
}
