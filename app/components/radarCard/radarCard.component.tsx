'use client'

import useRadarVisibility from "@/app/hooks/useRadarVisibility";
import { RadarDescription, RadarPhoto, RadarCardContainer } from "./radarCard.styles";

export default function RadarCard() {

  const {ref, isVisible} = useRadarVisibility({threshold: 0.9});
    return (
        <>
        <RadarCardContainer>
        <RadarDescription $isVisible={isVisible} ref={ref}>
          <h2 className='title'>A Story Title</h2>
          <p className='summary'>
          “A summary either written by us or AI generated using a language
            model API type shit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure cum repellendus doloribus officiis ipsa
            obcaecati voluptatum maxime temporibus dolorum corrupti.”
          </p>
          <p className="author">By Author Name</p>
          <div className='overlay'></div>
        </RadarDescription>
        <RadarPhoto />
      </RadarCardContainer>
        </>
    )
}