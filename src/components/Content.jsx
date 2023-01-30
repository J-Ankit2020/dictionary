import React from 'react';
import { BeatLoader } from 'react-spinners';
import Section from './Section';

 const Content = ({isLoading, data}) => {
     const {phonetics} = data || [];
    const playAudio = (e)=> {
        if(phonetics.length > 0){
        const audio = new Audio(phonetics[0].audio);
        audio.play();
        }
    }
    const {meanings} = data || {}
    return (
        <>
        {isLoading && <BeatLoader color="#A445ED" className='text-center'size={20} speedMultiplier={1}/>
}
        {!isLoading && <div className="content dark:text-white w-11/12 md:w-1/2 mx-auto">
            <div className="heading-div flex justify-between items-center mb-8">
                <div className="left  p-4">
                    <p className="text-3xl ">{data?.word ||"dictionary"}</p>
                    <p className="pronounciation text-[#A445ED] ">{data.phonetic || '/ˈdɪkʃəˌnɛɹi/'}
                    </p>
                </div>
                <div className="right w-16 cursor-pointer " onClick={playAudio}>
                    <img src="assets/icon-play.svg" alt="" className="w-full" />
                </div>
            </div>
            {meanings && meanings.map(meaning => <Section meaning={meaning}/>)}
        </div>}
        </>
    )
}
export default Content;