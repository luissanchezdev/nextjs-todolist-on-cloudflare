'use client'

import { useEffect, useState } from "react"

type metadataIdeas = {
  id: string,
  title: string,
  description: string
}

function Dashboard() {

  const [metadata, setMetadata] = useState<metadataIdeas | null>(null)

  useEffect(() => {
    const getData = async () => {
      await fetch('https://test.ideasllaneras.com/items/global')
        .then(response => response.json())
        .then(data => {
          console.log( data.data.description )
          setMetadata(data.data)
        })
        .catch( err => {
          console.log({ err })
        })
    }

    getData()
  },[])

  return (
    <>
      <div>Dashboard</div>
      <p>{ metadata ? metadata.description : 'No hay datos' }</p>
    </>
  )
}

export default Dashboard