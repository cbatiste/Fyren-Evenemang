function Profile({name, position, description, image}) {
  return (
    <div className={'flex flex-row mb-6'}>
      <div className={'basis-3/4 self-center pr-6'}>
        <h5 className={'text-3xl font-semibold'}>{name}</h5>
        <p className={'text-xl mt-1 italic'}>{position}</p>
        <p className={'mt-4'}>{description}</p>
      </div>
      <div className={'basis-1/4 p-4'}>
        <img src={image} alt={`Photo of ${name}`} style={{width: '100%', height: 'auto'}} />
      </div>
    </div>
  );
}


export default function About() {
  return (
    <section className={'pb-8'}>
      <p className={'text-[2.5rem] mt-4'}>Our Team</p>

      <div className={'px-8'}>
        <Profile
          name={'Erik "Kasizzle" Larsson'}
          position={'CEO, Founder'}
          description={`Erik Larson was a multi-billionaire by the age 21, he started oft his career as a DU then slowly moved
                      to becoming an entrepreneur doing all things he loved. He has many accomplishments such as fucking your mother.`}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />

        <Profile
          name={'Theo Heikkilä'}
          position={'Design Manager'}
          description={`Theo Heikkilä is a world renowned artist working for companies such as Apple, Google, and Louis Vuitton.
                      The only downside to him is that he has Bangkok girlfriend LMAO. Here's a little secret. You know Banksy? Yeah, that's him!`}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />

        <Profile
          name={'Astrid Demirbag'}
          position={'Club Mother, Nöjeschef'}
          description={`How do you keep you pants up? "Asked anyone ever," Astrid's reply... built. Astrid's most famous but polarizing
                      quote is "Monday left me broken, Tuesday I was full of hoping."`}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />

        <Profile
          name={'Linnea Vellani'}
          position={'Intern, Personal Assistant'}
          description={`Linnea does everything her boss tells her to. Who is her boss, you ask? Anyone with the gender of male.`}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />

        <Profile
          name={'Colin Adlivankin'}
          position={'Social Media Manager, TikTok'}
          description={<p>We got a number one victory royale <br/>
            Yeah. Fortnite, we bout to get down (Get down) <br/>
            Ten kills on the board right now <br/>
            Just wiped out Tomato Town <br/>
            My friend just got downed</p>}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />

        <Profile
          name={'Oliver Rågfelt'}
          position={'Chief Running Waiter, Videographer, Camera Operator'}
          description={`Professional Thaiboy. Here is a list of Oliver's greatest quotes... "Not taking a risk, is taking a risk."
                     "Disrupt or be disrupted." "Fly high, bird man, moon like hawk. water like beaver." Khap un-Khap.`}
          image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
        />
      </div>
    </section>
  );
}