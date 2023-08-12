function CollabCard(props) {
  const {collaborator} = props;

  return (
    <div className={'flex items-center my-4 mx-1 md:mx-8 min-w-[120px] min-h-[80px]'}>
      <a href={collaborator.url} target={'_blank'}>
        <img src={collaborator.image} alt={collaborator.name}
             className={'max-w-[320px] max-h-[160px] hover:scale-105 transition ease-in-out duration-200 cursor-pointer'}/>
      </a>
    </div>
  )
}

export default function Collaborators() {
  const collaborators = [
    {name: "HYDE Stockholm", image: '/collaborators/hyde.jpeg', url: 'https://www.hydestockholm.se/'},
    {name: "MYST Stockholm", image: '/collaborators/myst.jpeg', url: 'https://www.myststockholm.nu/'},
    {name: "Oxid Bar", image: '/collaborators/oxid.png', url: 'https://www.oxidbar.se/'},
    {name: "Cucina Povera", image: '/collaborators/cucina-povera.png', url: 'https://www.cucinapovera.se/'},
    {name: "Patricia", image: '/collaborators/patricia.png', url: 'https://www.patriciastockholm.se/'},
    {
      name: "Student Union of IEGS",
      image: '/collaborators/iegs-student-union.png',
      url: 'https://studentunioniegs.wordpress.com/'
    },
    {
      name: "Marina Läroverkets Elevkår",
      image: '/collaborators/marina-laroverket.png',
      url: 'https://www.facebook.com/ML.elevkar/'
    },
    {name: "Norra Reals Elevkår", image: '/collaborators/norra-real.png', url: 'https://www.norraselevkar.se/'}
  ];

  return (
    <section className={'pb-8 relative'}>
      <div className={'flex flex-col sm:flex-row items-center flex-wrap mt-8'}>
        {collaborators.map(collab => (
          <CollabCard collaborator={collab} key={collab.name}/>
        ))}
      </div>
    </section>
  )
}