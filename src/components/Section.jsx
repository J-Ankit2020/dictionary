import React from 'react'
import ListItem from './ListItem'
import SubList from './SubList'

const Section = ({meaning}) => {
  const {definitions} = meaning;
  const {synonyms} = meaning; 
  return (
    <>
    <div className="noun w-full flex items-center">
                <div className="text-3xl mr-4">{meaning.partOfSpeech ||''}</div>
                <hr className="w-3/4 border-gray-500" />
            </div>
            <div className="my-4 w-full font-normal p-2 mb-4">
                <p className="text-lg text-gray-400">Meaning</p>
                <ul className="list-disc mt-9 py-2 px-5">
                    {/* <li className="mb-2">The act of going</li>
                    <li className="mb-2">
                        A turn at something, or in something(e.g. a game).
                        <ul className="list-inside text-gray-500">
                            <li className="">
                                "It’s your go."
                            </li>
                        </ul>
                    </li> */}
                    {/* meaning */}
                    {definitions.map(item => {
                      return (<>
                      <ListItem definition={item.definition}/>
                    <SubList example={item.example}/>
                    </>
                    )}
                    )}
                </ul>
                <div className="flex items-center mt-6">
                    {synonyms.length > 0 && <p className="mr-3 text-gray-500">Synonyms</p>}
                    <p className="text-sm text-[#A445ED] font-semibold">
                      {synonyms.map(synonym=>synonym)}
                    </p>
                </div>
            </div>
    </>
  )
}

export default Section;