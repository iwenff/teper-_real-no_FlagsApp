

const Modal = ({selectedCountry, setSelectedCountry}) => {
  return (
    <div
      onClick={() => setSelectedCountry(null)}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '600px',
          maxHeight: '80%',
          overflowY: 'auto'
        }}
      >
        <h2>{selectedCountry.name}</h2>
        <img src={selectedCountry.flags?.png} alt={selectedCountry.name} width="150" />

        <p><strong>Capital:</strong> {selectedCountry.capital}</p>
        <p><strong>Region:</strong> {selectedCountry.region}</p>
        <p><strong>Subregion:</strong> {selectedCountry.subregion}</p>
        <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
        <p><strong>Area:</strong> {selectedCountry.area?.toLocaleString()} km²</p>
        <p><strong>Timezones:</strong> {selectedCountry.timezones?.join(', ')}</p>
        <p><strong>Languages:</strong> {selectedCountry.languages?.map((lang) => lang.name).join(', ')}</p>
        <p><strong>Currencies:</strong> {selectedCountry.currencies?.map((curr) => `${curr.name} (${curr.symbol})`).join(', ')}</p>
        <p><strong>Borders:</strong> {selectedCountry.borders?.join(', ') || 'None'}</p>

        <button onClick={() => setSelectedCountry(null)} style={{ marginTop: '20px' }}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal