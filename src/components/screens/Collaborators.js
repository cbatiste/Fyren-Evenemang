import {useContext} from "react";
import Image from 'next/image';
import {DataContext} from "../../pages";

function CollabCard(props) {
  const {collaborator} = props;
  const {logo} = collaborator;

  const containerAspectRatio = 320 / 160;
  let logoDimensions;

  if (logo.dimensions.aspectRatio >= containerAspectRatio) {
    logoDimensions = {width: 320, height: 320 / logo.dimensions.aspectRatio};
  } else {
    logoDimensions = {width: 160 * logo.dimensions.aspectRatio, height: 160};
  }

  return (
    <div className={'flex items-center mx-2 md:my-3 md:mx-5 lg:my-4 lg:mx-8 min-h-[150px] scale-90 md:scale-100'}>
      <a href={collaborator.url} target={'_blank'}>
        <Image src={logo.url} alt={collaborator.name}
               width={logoDimensions.width} height={logoDimensions.height}
               className={'max-w-[320px] max-h-[140px] md:max-h-[160px] hover:scale-105 transition ease-in-out duration-200 cursor-pointer'}
        />
      </a>
    </div>
  )
}

export default function Collaborators() {
  const collaboratorsData = useContext(DataContext).collaborators;

  let collaborators = collaboratorsData.sort((a, b) => (
    new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  )).sort((a, b) => (
    (a.order || 1000) - (b.order || 1000)
  ));

  console.log(collaborators);

  return (
    <section className={'pb-8'}>
      <div className={'flex flex-row items-center justify-evenly sm:justify-start flex-wrap pt-8'}>
        {collaborators.map(collab => (
          <CollabCard collaborator={collab} key={collab.name}/>
        ))}
      </div>
    </section>
  )
}