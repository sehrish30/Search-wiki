import React from 'react';
import Page from '.';
import moxios from 'moxios'

import {
    useLocation
  } from "react-router-dom";

moxios.install()

// Match against an exact URL value
moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=hello&limit=50', {
    status: 200,
    response: ["hello",["Hello","Hello (Adele song)","Hello Kitty","Hello, Dolly! (musical)","Hello Venus","Hello, Love, Goodbye","Helloween","Hello Kitty Online","Hello, Dolly! (film)","Hello, My Twenties!","Hellogoodbye","Hello, Goodbye","Hello! Project","Hello My Love","Hello My Name Is...","\"Hello, World!\" program","Hello Neighbor","Hello Counselor","Hello Hurricane","Hello Garci scandal","Hello Good Morning","Hello Kitty murder","Hello, I Must Be Going! (album)","Hello Nasty","Hello, I'm Dolly","Hello Monster","Hello! Project Shuffle Unit","Hello (Lionel Richie song)","Hello Kitty (song)","Hello Internet","HelloFresh","Helloween discography","Hello Sunshine (company)","Hello Mary Lou: Prom Night II","Hello Baby","Hello Master","Hello (2017 film)","Hello (Martin Solveig song)","Hello (band)","Hello Ladies","Hello Work","Hello (Turn Your Radio On)","Hello Ga-Young","Hello, Sister! (1933 film)","Hello, Good-bye","Hello It's Me","Hello, My Name Is Doris","Hello from the Magic Tavern","Hello Pro Kenshusei","Hello Games"],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["https://en.wikipedia.org/wiki/Hello","https://en.wikipedia.org/wiki/Hello_(Adele_song)","https://en.wikipedia.org/wiki/Hello_Kitty","https://en.wikipedia.org/wiki/Hello,_Dolly!_(musical)","https://en.wikipedia.org/wiki/Hello_Venus","https://en.wikipedia.org/wiki/Hello,_Love,_Goodbye","https://en.wikipedia.org/wiki/Helloween","https://en.wikipedia.org/wiki/Hello_Kitty_Online","https://en.wikipedia.org/wiki/Hello,_Dolly!_(film)","https://en.wikipedia.org/wiki/Hello,_My_Twenties!","https://en.wikipedia.org/wiki/Hellogoodbye","https://en.wikipedia.org/wiki/Hello,_Goodbye","https://en.wikipedia.org/wiki/Hello!_Project","https://en.wikipedia.org/wiki/Hello_My_Love","https://en.wikipedia.org/wiki/Hello_My_Name_Is...","https://en.wikipedia.org/wiki/%22Hello,_World!%22_program","https://en.wikipedia.org/wiki/Hello_Neighbor","https://en.wikipedia.org/wiki/Hello_Counselor","https://en.wikipedia.org/wiki/Hello_Hurricane","https://en.wikipedia.org/wiki/Hello_Garci_scandal","https://en.wikipedia.org/wiki/Hello_Good_Morning","https://en.wikipedia.org/wiki/Hello_Kitty_murder","https://en.wikipedia.org/wiki/Hello,_I_Must_Be_Going!_(album)","https://en.wikipedia.org/wiki/Hello_Nasty","https://en.wikipedia.org/wiki/Hello,_I%27m_Dolly","https://en.wikipedia.org/wiki/Hello_Monster","https://en.wikipedia.org/wiki/Hello!_Project_Shuffle_Unit","https://en.wikipedia.org/wiki/Hello_(Lionel_Richie_song)","https://en.wikipedia.org/wiki/Hello_Kitty_(song)","https://en.wikipedia.org/wiki/Hello_Internet","https://en.wikipedia.org/wiki/HelloFresh","https://en.wikipedia.org/wiki/Helloween_discography","https://en.wikipedia.org/wiki/Hello_Sunshine_(company)","https://en.wikipedia.org/wiki/Hello_Mary_Lou:_Prom_Night_II","https://en.wikipedia.org/wiki/Hello_Baby","https://en.wikipedia.org/wiki/Hello_Master","https://en.wikipedia.org/wiki/Hello_(2017_film)","https://en.wikipedia.org/wiki/Hello_(Martin_Solveig_song)","https://en.wikipedia.org/wiki/Hello_(band)","https://en.wikipedia.org/wiki/Hello_Ladies","https://en.wikipedia.org/wiki/Hello_Work","https://en.wikipedia.org/wiki/Hello_(Turn_Your_Radio_On)","https://en.wikipedia.org/wiki/Hello_Ga-Young","https://en.wikipedia.org/wiki/Hello,_Sister!_(1933_film)","https://en.wikipedia.org/wiki/Hello,_Good-bye","https://en.wikipedia.org/wiki/Hello_It%27s_Me","https://en.wikipedia.org/wiki/Hello,_My_Name_Is_Doris","https://en.wikipedia.org/wiki/Hello_from_the_Magic_Tavern","https://en.wikipedia.org/wiki/Hello_Pro_Kenshusei","https://en.wikipedia.org/wiki/Hello_Games"]]
  })

moxios.stubRequest('ttps://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=sdfsdfsdfsdfsd&limit=10', {
status: 200,
response: ["sdfsdfsdfsdfsd",[],[],[]]
})  


export default {
  title: 'Pages/Search',
  component: Page
};
  

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    location: useLocation()
  };

// export const NoData = Template.bind({});
// NoData.args = {
//     location: '?query=sdfsdfsdfsdfsd'
// };  


// export const Secondary = Template.bind({});
// Secondary.args = {
//    location: {
//       search: '?query=elon'
//     }
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
