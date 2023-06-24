import {createContext} from 'react';
import {useSanityQuery} from "components/utility/SanityClient";

import PageLogo from 'components/PageLogo';
import Navigator from 'components/screens/Navigator';
import ContactFooter from 'components/ContactFooter';

import UpcomingScreen from 'components/screens/Upcoming';
import ArchiveScreen from 'components/screens/Archive';
import AboutScreen from 'components/screens/About';
import CollaboratorsScreen from 'components/screens/Collaborators';

export const DataContext = createContext(null);

export default function Home() {
  const eventsQuery = `*[_type == "event"] {
    name, date, time, location, address, lineupArtists, lineupDJs, tickets, ticketsURL,
    'poster': poster.asset -> {url, altText, 'dimensions': metadata.dimensions},
    'photoAlbum': photos[].asset -> {url, altText, 'dimensions': metadata.dimensions}
  }`;

  let teamMembersQuery = `*[_type == "teamMember"]{
    name, position, description,
    'photo': photo.asset -> {url, altText, 'dimensions': metadata.dimensions}
  }`;

  let eventData = useSanityQuery(eventsQuery);
  let teamMembersData = useSanityQuery(teamMembersQuery);
  let apiData = {events: eventData, teamMembers: teamMembersData};

  const navigationScreens = [
    {id: "upcoming", title: "UPCOMING", component: <UpcomingScreen/>},
    {id: "archive", title: "ARCHIVE", component: <ArchiveScreen/>},
    {id: "about", title: "ABOUT US", component: <AboutScreen/>},
    {id: "collaborators", title: "COLLABORATORS", component: <CollaboratorsScreen/>},
  ];

  return (
    <DataContext.Provider value={apiData}>
      <main className={`flex min-h-screen flex-col text-zinc-900`}>
        <section className={'flex flex-col pb-64 w-full'}>
          <PageLogo/>
          <div className={'flex flex-col pt-24 px-8 sm:px-[10%] lg:px-[12%]'}>
            <Navigator screens={navigationScreens}/>
          </div>
        </section>
        <ContactFooter/>
      </main>
    </DataContext.Provider>
  )
}
