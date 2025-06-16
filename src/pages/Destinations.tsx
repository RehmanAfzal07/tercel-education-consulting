'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

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
  { name: 'Aberdeen', logo: './aberdeen.svg', desc: 'International Study Centre' },
  { name: 'Cardiff', logo: './cardiff.svg' },
  { name: 'Durham', logo: './durham.svg', desc: 'International Study Centre' },
  { name: 'Huddersfield', logo: './huddersfield.svg', desc: 'International Study Centre' },
  { name: 'Kingston', logo: './kingston.svg', desc: 'International Study Centre' },
  { name: 'Leeds', logo: './leeds.svg', desc: 'International Study Centre' },
  { name: 'Leeds Beckett', logo: './leeds-beckett.svg', desc: 'International Study Centre' },
  { name: 'LJMU', logo: './ljmu.svg', desc: 'International Study Centre' },
  { name: 'Cardiff - Russel Group', logo: './cardiff-russell.svg', desc: 'International Study Centre' },
  { name: 'RHUL', logo: './rhul.svg', desc: 'International Study Centre' },
  { name: 'Sheffield', logo: './sheffield.svg', desc: 'International Study Centre' },
  { name: 'Strathclyde', logo: './strathclyde.svg', desc: 'International Study Centre' },
  { name: 'Surrey', logo: './surrey.svg', desc: 'International Study Centre' },
  { name: 'Sussex', logo: './sussex.svg', desc: 'International Study Centre' },
  { name: 'Teesside', logo: './teesside.svg', desc: 'International Study Centre' }

     ],
  },
  {
    id: 2,
    country: 'USA',
    list: [
    { name: 'Western Kentucky University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'New York Institute of Technology', logo: './next.svg' },
  { name: 'Hult International Business School', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Florida International University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Weber State University', logo: './next.svg', desc: 'International Study Center' },

  { heading: 'INTO USA' },

  { name: 'Drew', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Saint Louis University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'The University of Arizona', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Oregon State University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'George Mason University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Hofstra University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Colorado State University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of South Florida', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Alabama at Birmingham', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Illinois State University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Suffolk University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Washington State University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Glasgow Caledonian University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Fisher College', logo: './next.svg', desc: 'International Study Center' },
  { name: 'New England College', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Quinnipiac University', logo: './next.svg', desc: 'International Study Center' },

  { heading: 'NAVITAS USA' },

  { name: 'Richard Bland College of William & Mary', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Massachusetts Boston', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Queens College', logo: './next.svg', desc: 'International Study Center' },
  { name: 'SAE Institute', logo: './next.svg', desc: 'International Study Center' },

  { heading: 'SHORELIGHT USA' },

  { name: 'Adelphi University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'American University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Auburn University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Illinois at Chicago', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Florida International University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Louisiana State University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Central Florida', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Dayton', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Kansas', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of the Pacific', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of South Carolina', logo: './next.svg', desc: 'International Study Center' },
  { name: 'The University of Utah', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Gonzaga University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'American Collegiate', logo: './next.svg', desc: 'International Study Center' },
  { name: 'New York University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Mississippi', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Cleveland State University', logo: './next.svg', desc: 'International Study Center' },

  { heading: 'SG USA' },

  { name: 'James Madison University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'LIU Post', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Long Island University Brooklyn', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Western Washington University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'DePaul University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Texas A&M University-Corpus Christi', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Baylor University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'Lipscomb University', logo: './next.svg', desc: 'International Study Center' },
  { name: 'University of Hartford', logo: './next.svg', desc: 'International Study Center' }
 
    ],
  },
  {
    id: 3,
    country: 'Ireland',
    list: [{ name: 'University College Dublin', logo: './next.svg', desc: 'International Study Center' }],
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
    <div className='grid grid-cols-3 gap-3 text-center justify-center'>
      {filteredList.map((uni, index) => (
        uni.heading ? (
          <div key={index} className="col-span-3 my-4">
            <h4 className="text-xl font-bold text-left text-indigo-800 border-b pb-1">{uni.heading}</h4>
          </div>
        ) : (
          <Card key={index} className="flex flex-wrap justify-center p-2 items-center bg-gray-100 gap-4 hover:shadow-xl transition duration-200">
            <Image
              src={uni.logo}
              alt={uni.name}
              width={250}
              height={300}
              className="w-12 h-12 object-contain"
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
