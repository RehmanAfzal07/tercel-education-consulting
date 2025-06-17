'use client'

import React from 'react'
import { Card } from '@/components/ui/card'


const countries = [
  {
    id: 1,
    country: 'UK',
    bgImage: './assets/UK.jpg',
    description: 'With a rich academic heritage, the UK provides world-class education',
  },
  {
    id: 2,
    country: 'USA',
    bgImage: './assets/USA.jpg',
    description:
      'Home to world-renowned universities and cutting-edge research institutions, the United States offers',
  },
  {
    id: 3,
    country: 'Ireland',
    bgImage: './assets/Ireland.jpg',
    description: 'Ireland provides a warm, innovative educational environment with strong',
  },
]

const countryUniversities = [
  {
    id: 1,
    country: 'UK',
    list: [
  { name: 'Aberdeen', logo: './images/uk/1.jpeg', desc: 'International Study Centre' },
  { name: 'Cardiff', logo: './images/uk/2.jpeg', desc: 'Cardiff Metropolitan University' },
  { name: 'Durham', logo: './images/uk/3.jpeg', desc: 'International Study Centre' },
  { name: 'Huddersfield', logo: './images/uk/4.jpeg', desc: 'International Study Centre' },
  { name: 'Kingston', logo: './images/uk/5.jpeg', desc: 'International Study Centre' },
  { name: 'Leeds', logo: './images/uk/6.jpeg', desc: 'International Study Centre' },
  { name: 'Leeds Beckett', logo: './images/uk/7.jpeg', desc: 'International Study Centre' },
  { name: 'LJMU', logo: './images/uk/8.jpeg', desc: 'International Study Centre' },
  { name: 'Cardiff - Russel Group', logo: './images/uk/9.jpeg', desc: 'International Study Centre' },
  { name: 'RHUL', logo: './images/uk/10.jpeg', desc: 'International Study Centre' },
  { name: 'Sheffield', logo: './images/uk/11.jpeg', desc: 'International Study Centre' },
  { name: 'Strathclyde', logo: './images/uk/12.jpeg', desc: 'International Study Centre' },
  { name: 'Surrey', logo: './images/uk/13.jpeg', desc: 'International Study Centre' },
  { name: 'Sussex', logo: './images/uk/14.jpeg', desc: 'International Study Centre' },
  { name: 'Teesside', logo: './images/uk/15.jpeg', desc: 'International Study Centre' }

     ],
  },
  {
    id: 2,
    country: 'USA',
    list: [
    { name: 'Western Kentucky University', logo: './images/usa/1.jpeg', desc: 'International Study Center' },
  { name: 'New York Institute of Technology', logo: './images/usa/2.jpeg' },
  { name: 'Hult International Business School', logo: './images/usa/3.jpeg', desc: 'International Study Center' },
  { name: 'Florida International University', logo: './images/usa/4.jpeg', desc: 'International Study Center' },
  { name: 'Weber State University', logo: './images/usa/5.jpeg', desc: 'International Study Center' },

  { heading: 'INTO USA' },

  { name: 'Drew', logo: './images/usa/6.jpeg', desc: 'International Study Center' },
  { name: 'Saint Louis University', logo: './images/usa/7.jpeg', desc: 'International Study Center' },
  { name: 'The University of Arizona', logo: './images/usa/8.jpeg', desc: 'International Study Center' },
  { name: 'Oregon State University', logo: './images/usa/9.jpeg', desc: 'International Study Center' },
  { name: 'George Mason University', logo: './images/usa/10.jpeg', desc: 'International Study Center' },
  { name: 'Hofstra University', logo: './images/usa/11.jpeg', desc: 'International Study Center' },
  { name: 'Colorado State University', logo: './images/usa/12.jpeg', desc: 'International Study Center' },
  { name: 'University of South Florida', logo: './images/usa/13.jpeg', desc: 'International Study Center' },
  { name: 'University of Alabama at Birmingham', logo: './images/usa/14.jpeg', desc: 'International Study Center' },
  { name: 'Illinois State University', logo: './images/usa/15.jpeg', desc: 'International Study Center' },
  { name: 'Suffolk University', logo: './images/usa/17.jpeg', desc: 'International Study Center' },
  { name: 'Washington State University', logo: './images/usa/18.jpeg', desc: 'International Study Center' },
  { name: 'Glasgow Caledonian University', logo: './images/usa/19.jpeg', desc: 'International Study Center' },
  { name: 'Fisher College', logo: './images/usa/20.jpeg', desc: 'International Study Center' },
  { name: 'New England College', logo: './images/usa/21.jpeg', desc: 'International Study Center' },
  { name: 'Quinnipiac University', logo: './images/usa/22.jpeg', desc: 'International Study Center' },

  { heading: 'NAVITAS USA' },

  { name: 'Richard Bland College of William & Mary', logo: './images/usa/23.jpeg', desc: 'International Study Center' },
  { name: 'University of Massachusetts Boston', logo: './images/usa/24.jpeg', desc: 'International Study Center' },
  { name: 'Queens College', logo: './images/usa/25.jpeg', desc: 'International Study Center' },
  { name: 'SAE Institute', logo: './images/usa/26.jpeg', desc: 'International Study Center' },

  { heading: 'SHORELIGHT USA' },

  { name: 'Adelphi University', logo: './images/usa/27.jpeg', desc: 'International Study Center' },
  { name: 'American University', logo: './images/usa/28.jpeg', desc: 'International Study Center' },
  { name: 'Auburn University', logo: './images/usa/29.jpeg', desc: 'International Study Center' },
  { name: 'University of Illinois at Chicago', logo: './images/usa/30.jpeg', desc: 'International Study Center' },
  { name: 'Florida International University', logo: './images/usa/31.jpeg', desc: 'International Study Center' },
  { name: 'Louisiana State University', logo: './images/usa/32.jpeg', desc: 'International Study Center' },
  { name: 'University of Central Florida', logo: './images/usa/33.jpeg', desc: 'International Study Center' },
  { name: 'University of Dayton', logo: './images/usa/34.jpeg', desc: 'International Study Center' },
  { name: 'University of Kansas', logo: './images/usa/35.jpeg', desc: 'International Study Center' },
  { name: 'University of the Pacific', logo: './images/usa/36.jpeg', desc: 'International Study Center' },
  { name: 'University of South Carolina', logo: './images/usa/37.jpeg', desc: 'International Study Center' },
  { name: 'The University of Utah', logo: './images/usa/38.jpeg', desc: 'International Study Center' },
  { name: 'Gonzaga University', logo: './images/usa/39.jpeg', desc: 'International Study Center' },
  { name: 'American Collegiate', logo: './images/usa/40.jpeg', desc: 'International Study Center' },
  { name: 'New York University', logo: './images/usa/41.jpeg', desc: 'International Study Center' },
  { name: 'University of Mississippi', logo: './images/usa/42.jpeg', desc: 'International Study Center' },
  { name: 'Cleveland State University', logo: './images/usa/43.jpeg', desc: 'International Study Center' },

  { heading: 'SG USA' },

  { name: 'James Madison University', logo: './images/usa/44.jpeg', desc: 'International Study Center' },
  { name: 'LIU Post', logo: './images/usa/45.jpeg', desc: 'International Study Center' },
  { name: 'Long Island University Brooklyn', logo: './images/usa/46.jpeg', desc: 'International Study Center' },
  { name: 'Western Washington University', logo: './images/usa/47.jpeg', desc: 'International Study Center' },
  { name: 'DePaul University', logo: './images/usa/48.jpeg', desc: 'International Study Center' },
  { name: 'Texas A&M University-Corpus Christi', logo: './images/usa/47.jpeg', desc: 'International Study Center' },
  { name: 'Baylor University', logo: './images/usa/48.jpeg', desc: 'International Study Center' },
  { name: 'Lipscomb University', logo: './images/usa/49.jpeg', desc: 'International Study Center' },
  { name: 'University of Hartford', logo: './images/usa/50.jpeg', desc: 'International Study Center' }
 
    ],
  },
  {
    id: 3,
    country: 'Ireland',
    list: [{ name: 'University College Dublin', logo: './images/ireland/1.jpeg', desc: 'International Study Center' }],
  },
]

const Destinations = () => {
    const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null)
    const [isUp, setIsUp] = React.useState(false);
    
     const handleToggle = () => {
    setIsUp(prev => !prev);
  };
   

  const filteredList = selectedCountry
    ? countryUniversities.find((c) => c.country === selectedCountry)?.list || []
    : []

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Destinations</h2>

      {/* Country Cards */}
    <div className="flex flex-wrap justify-center gap-6 mb-12">
     
  {countries.map((c) => (
    <div
      key={c.id}
      onClick={() => setSelectedCountry(c.country)}
      className={`relative w-72 h-48 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
        selectedCountry === c.country
          ? 'ring-2 ring-blue-500 shadow-lg'
          : 'hover:ring-2 hover:ring-gray-300'
      }`}
      style={{
        backgroundImage: `url(${c.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >


    <span
      onClick={handleToggle}
      className="inline-block cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 text-white transition-transform duration-300 ${
          isUp ? 'rotate-180' : ''
        }`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
      </svg>
    </span>

    
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-white text-xl font-bold mb-2">{c.country}</h3>
        <p className="text-sm text-gray-200">{c.description}</p>
      </div>
    </div>
  ))}
</div>


      {/* University List Grid */}
    {selectedCountry && (
  <div className='bg-white p-6 shadow-2xl'>
    <h3 className="text-2xl font-semibold mb-6 text-center">{selectedCountry} Universities</h3>
    <div className='grid lg:grid-cols-5 md:grid-col-3 sm:grid-col-2 gap-3 text-center  justify-center'>
      {filteredList.map((uni, index) => (
        uni.heading ? (
          <div key={index} className="col-span-5 py-8">
            <h4 className="text-2xl font-bold text-left text-indigo-800 border-b pb-1">{uni.heading}</h4>
          </div>
        ) : (
          <Card key={index} className="flex flex-wrap justify-center p-2 items-center bg-gray-100 gap-4 hover:shadow-xl transition duration-200">
            <img
              src={uni.logo}
              alt={uni.name}
              
              className="w-full h-1/2 object-contain"
            />
            <div>
              {/* <h4 className="font-semibold">{uni.name}</h4> */}
              {uni.desc && <p className="text-sm text-gray-500">{uni.desc}</p>}
            </div>
          </Card>
        )
      ))}
    </div>
  </div>
)}

    </div>
  )
}

export default Destinations
