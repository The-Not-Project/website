import { RadarDescription, RadarPhoto, RadarCardContainer } from "./radarCard.styles";


type RadarCardProps = {
  overlayShrink: boolean;
  radarRef: React.RefObject<HTMLDivElement>;
}

export default function RadarCard({overlayShrink, radarRef}: RadarCardProps) {


    return (
        <>
        <RadarCardContainer>
        <RadarDescription $shrink={overlayShrink} ref={radarRef}>
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