import DynamicImage from "components/DynamicImage";
import {useContext} from "react";
import {DataContext} from "../../pages";
import {FaApple, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaLink, FaLinkedin, FaSpotify} from "react-icons/fa";

function Profile({name, position, description, image, social}) {
  const socialIcons = {
    email: <FaEnvelope/>,
    linkedin: <FaLinkedin/>,
    instagram: <FaInstagramSquare/>,
    facebook: <FaFacebookSquare/>,
    website: <FaLink/>,
    spotify: <FaSpotify/>,
    appleMusic: <FaApple/>
  };

  const socialNames = {
    email: "Email",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",
    website: "Website",
    spotify: "Spotify",
    appleMusic: "Apple Music"
  };

  return (
    <div className={'flex flex-col md:flex-row mb-12 md:mb-6'}>
      <div className={'order-2 md:order-1 md:basis-3/4 self-center md:pr-6 md:py-6'}>
        <h5 className={'text-2xl sm:text-3xl font-semibold'}>{name}</h5>
        <p className={'text-lg sm:text-xl mt-1 italic'}>{position}</p>
        <p className={'mt-4'}>{description}</p>
        <div className={'flex flex-row flex-wrap mt-4'}>
          {Object.keys(social).map(key => {
            if (!social[key]) return;
            let url = key === 'email' ? `mailto:${social[key]}` : social[key];

            return (
              <a className={'flex flex-row text-zinc-700 mr-4 mb-2'} href={url} target='_blank' key={key}>
                <div className={'inline text-lg p-[3px] mr-1'}>{socialIcons[key]}</div>
                <span className={''}>{socialNames[key]}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className={'self-center order-1 md:order-2 md:basis-1/4 p-4'}>
        <DynamicImage
          className={'m-auto min-w-[200px] max-w-[60%] sm:max-w-[280px] lg:max-w-none'}
          src={image}
          alt={`Photo of ${name}`}
          defaultHeight={250}
        />
      </div>
    </div>
  );
}

/*
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
  description={<span>We got a number one victory royale <br/>
    Yeah. Fortnite, we bout to get down (Get down) <br/>
    Ten kills on the board right now <br/>
    Just wiped out Tomato Town <br/>
    My friend just got downed</span>}
  image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
/>

<Profile
  name={'Oliver Rågfelt'}
  position={'Chief Running Waiter, Videographer, Camera Operator'}
  description={`Professional Thaiboy. Here is a list of Oliver's greatest quotes... "Not taking a risk, is taking a risk."
             "Disrupt or be disrupted." "Fly high, bird man, moon like hawk. water like beaver." Khap un-Khap.`}
  image={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
/>
*/

export default function About() {
  const teamData = useContext(DataContext).teamMembers;

  return (
    <section className={'pb-8'}>
      <div className={'px-0 sm:px-8'}>
        {
          teamData?.length ? teamData.map((member, i) => (
            <Profile
              name={member.name}
              position={member.position}
              description={member.description}
              image={member.photo.url}
              social={{
                email: member.email,
                linkedin: member.linkedin,
                instagram: member.instagram,
                facebook: member.facebook,
                website: member.website,
                spotify: member.spotify,
                appleMusic: member.appleMusic
              }}
              key={i}
            />
          )) : <p className={'text-center text-lg sm:text-xl pt-12 pb-8'}>We lost the whole team</p>
        }
      </div>
    </section>
  );
}