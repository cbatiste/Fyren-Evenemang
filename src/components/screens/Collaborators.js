import DynamicImage from "components/DynamicImage";

export default function Collaborators() {
  return (
    <section className={'pb-8'}>
      <div className={'flex flex-row flex-wrap items-center'}>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[240px] sm:w-[320px] md:w-[460px]'}
                      alt={'Oxid Bar'}
                      defaultHeight={120}
                      src={'/collaborators/oxid.png'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[240px] sm:w-[320px] md:w-[460px]'}
                      alt={'Patricia'}
                      defaultHeight={120}
                      src={'/collaborators/patricia.png'}/>
      </div>
      <div className={'flex flex-row flex-wrap items-center'}>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'HYDE Stockholm'}
                      defaultHeight={120}
                      src={'/collaborators/hyde.jpeg'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'MYST Stockholm'}
                      defaultHeight={120}
                      src={'/collaborators/myst.jpeg'}/>
      </div>
      <div className={'flex flex-row flex-wrap items-center'}>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Student Union of IEGS'}
                      defaultHeight={120}
                      src={'/collaborators/iegs-student-union.png'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Marina Läroverkets Elevkår'}
                      defaultHeight={120}
                      src={'/collaborators/marina-laroverket.png'}/>
        <DynamicImage className={'inline-block m-1 sm:m-2 md:m-4 w-[120px] sm:w-[150px] md:w-[200px]'}
                      alt={'Kungstensgymnasiets Elevkår'}
                      defaultHeight={120}
                      src={'/collaborators/ksg-elevkar.png'}/>
      </div>
    </section>
  )
}