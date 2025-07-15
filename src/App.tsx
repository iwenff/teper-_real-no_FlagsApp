import { useEffect, useState } from 'react'
import Modal from './Modal'

function App() {
  const [countryData, setCountryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [status, setStatus] = useState<'loading' | 'fullfilled'>('loading')

  useEffect(() => {
    const fetchSomeData = async () =>{
      const response = await fetch('data.json')
      const data = await response.json()
      

      try{
        setCountryData(data)
      }catch(e){
        console.log(e)
      }finally{
        setStatus('fullfilled')
      }
    } 

    fetchSomeData()
  }, [])

  if(status === 'loading') return <p>Загрузка...</p>
  
  const flagInfo = (name) => {
    const found = countryData.find(item => item.name === name)
    if(found){
      setSelectedCountry(found)
    }
  }

  return (
    <>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', listStyle: 'none', padding: 0 }}>
        {countryData.map((item) => (
          <li key={item.demonym} onClick={() => flagInfo(item.name)} style={{ cursor: 'pointer' }}>
            <img src={item.flags?.png} alt={item.name} width="100" />
            <p style={{ textAlign: 'center' }}>{item.name}</p>
          </li>
        ))}
      </ul>
      
      {selectedCountry && (
        <Modal selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      )}


      
    </>
  )
}

export default App
