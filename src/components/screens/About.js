import DynamicImage from 'components/DynamicImage';
import { useContext } from 'react';
import { DataContext } from '../../pages';
import {
  FaApple,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaSpotify
} from 'react-icons/fa';

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
    <div className={'flex flex-col md:flex-row pb-12 pt-6 md:pb-6'}>
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